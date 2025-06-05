# frozen_string_literal: true

class CreateRatings < ActiveRecord::Migration[6.1]
  def change
    safety_assured do
      create_table :topic_ratings do |t|
        t.integer :topic_id, null: false
        t.integer :user_id, null: false
        t.string :rating_type, null: false
        t.integer :value, null: false
        t.timestamps null: false
      end

      add_index :topic_ratings, %i[topic_id user_id rating_type], unique: true, name: 'idx_topic_ratings_unique'
      add_foreign_key :topic_ratings, :topics
      add_foreign_key :topic_ratings, :users
    end
  end
end
