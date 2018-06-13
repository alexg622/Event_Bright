class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.string :img_url, null: false
      t.datetime :start_time, null: false
      t.datetime :end_time, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :zipcode, null: false
      t.float :price, null: false
      t.text :details, null: false
      t.integer :user_id, null: false
      t.text :state, null: false 

      t.timestamps
    end
    add_index :events, :title, unique: true
    add_index :events, :user_id
  end
end
