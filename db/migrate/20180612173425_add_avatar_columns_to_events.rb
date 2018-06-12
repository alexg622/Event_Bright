class AddAvatarColumnsToEvents < ActiveRecord::Migration[5.2]
  def up
    add_attachment :events, :avatar
  end

  def down
    remove_attachment :events, :avatar
  end
end
