class CreateRatings < ActiveRecord::Migration[6.1]
  def change
    create_table :topic_ratings do |t|
      t.integer :topic_id
      t.integer :user_id
      t.string :rating_type
      t.integer :value
      t.timestamps
    end

    add_index :topic_ratings, [:topic_id, :user_id, :rating_type], unique: true
  end
end
