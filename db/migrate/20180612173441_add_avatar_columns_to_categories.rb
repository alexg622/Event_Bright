class AddAvatarColumnsToCategories < ActiveRecord::Migration[5.2]
  def up
    add_attachment :categories, :avatar
  end

  def down
    remove_attachment :categories, :avatar
  end
end
