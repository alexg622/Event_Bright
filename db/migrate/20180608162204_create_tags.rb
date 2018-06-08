class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.integer :category_id, null: false
      t.integer :event_id, null: false

      t.timestamps
    end
    add_index :tags, :category_id
    add_index :tags, :event_id
    add_index :tags, [:event_id, :category_id], unique: true
  end
end
