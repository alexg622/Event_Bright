class Bookmark < ApplicationRecord

  validates :user_id, uniqueness: { scope: :event_id }
end
