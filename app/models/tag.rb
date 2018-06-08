class Tag < ApplicationRecord

  validates :event_id, uniqueness:  { scope: :category_id }

  belongs_to :event,
    primary_key: :id,
    foreign_key: :event_id,
    class_name: :Event 
end
