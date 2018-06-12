class Category < ApplicationRecord


  validates :name, presence: true, uniqueness: true
  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  has_many :tags,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: :Tag

  has_many :events,
    through: :tags,
    source: :event
end
