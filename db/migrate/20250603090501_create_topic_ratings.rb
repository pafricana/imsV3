class CreateTopicRatings < ActiveRecord::Migration[6.1]
  def change
    create_table :topic_ratings do |t|
      t.integer :user_id, null: false
      t.integer :topic_id, null: false
      t.string :rating_type, null: false
      t.integer :value, null: false
      t.timestamps null: false
    end

    add_index :topic_ratings, [:user_id, :topic_id, :rating_type], unique: true
  end
end
