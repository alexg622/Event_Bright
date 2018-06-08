class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :img_url, null: false
      t.string :name, null: false

      t.timestamps
    end
    add_index :categories, :name, unique: true
  end
end
