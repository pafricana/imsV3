# name: discourse-ratings
# about: Adds star ratings to topics
# version: 0.1
# authors: Your Name
# url: https://github.com/yourusername/discourse-ratings

enabled_site_setting :discourse_ratings_enabled

register_asset "stylesheets/ratings.scss"

module ::DiscourseRatings
  PLUGIN_NAME = "discourse-ratings"
  
  class Engine < ::Rails::Engine
    engine_name PLUGIN_NAME
    isolate_namespace DiscourseRatings
  end
end

after_initialize do
  module ::DiscourseRatings
    class TopicRating < ActiveRecord::Base
      self.table_name = "topic_ratings"
      
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

  require_dependency "topic_list_item_serializer"
  class ::TopicListItemSerializer
    attributes :ratings

    def include_ratings?
      true
    end

    def ratings
      {
        importance: DiscourseRatings::TopicRating.find_by(topic_id: object.id, rating_type: 'importance')&.value,
        feasibility: DiscourseRatings::TopicRating.find_by(topic_id: object.id, rating_type: 'feasibility')&.value
      }
    end
  end

  require_dependency "topics_controller"
  class ::TopicsController
    before_action :ensure_logged_in, only: [:rate]

    def rate
      topic = Topic.find_by(id: params[:topic_id])
      guardian.ensure_can_see!(topic)

      rating = DiscourseRatings::TopicRating.find_or_initialize_by(
        topic_id: topic.id,
        user_id: current_user.id,
        rating_type: params[:rating_type]
      )
      rating.value = params[:value]
      rating.save!

      render json: success_json
    end
  end

  Discourse::Application.routes.append do
    post "/topics/:topic_id/rate" => "topics#rate"
  end
end