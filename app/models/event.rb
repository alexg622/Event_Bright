# == Schema Information
#
# Table name: events
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  img_url    :string           not null
#  start_time :datetime         not null
#  end_time   :datetime         not null
#  address    :string           not null
#  city       :string           not null
#  zipcode    :string           not null
#  price      :float            not null
#  details    :text             not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Event < ApplicationRecord
  validates :title, :img_url, :state, :start_time, :end_time, :address, :city, :zipcode, :price, :details, :user_id, presence: true
  validates :title, uniqueness: true

  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  belongs_to :author,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :tickets,
    primary_key: :id,
    foreign_key: :event_id,
    class_name: :Ticket

  has_many :users,
    through: :tickets,
    source: :user

  has_many :tags,
    primary_key: :id,
    foreign_key: :event_id,
    class_name: :Tag

  has_many :categories,
    through: :tags,
    source: :category
end
