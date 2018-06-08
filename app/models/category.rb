class Category < ApplicationRecord


  validates :name, presence: true, uniqueness: true


  has_many :tags,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: :Tag

  has_many :events,
    through: :tags,
    source: :event
end
