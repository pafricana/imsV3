# frozen_string_literal: true

# name: imsv3
# about: Adds star ratings to topics
# version: 0.1
# authors: Your Name
# url: https://github.com/pafricana/imsV3

enabled_site_setting :imsv3_enabled
register_asset "stylesheets/ratings.scss"

after_initialize do
  module ::ImsV3
    class Engine < ::Rails::Engine
      engine_name "imsv3"
      isolate_namespace ImsV3
    end
  end

  class ::TopicRating < ActiveRecord::Base
    belongs_to :user
    belongs_to :topic
    belongs_to :category
    
    validates :user_id, presence: true
    validates :topic_id, presence: true
    validates :rating_type, presence: true
    validates :value, numericality: { 
      only_integer: true,
      greater_than_or_equal_to: 1,
      less_than_or_equal_to: 5
    }
  end
end
