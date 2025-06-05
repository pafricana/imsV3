# name: discourse-ratings
# about: Adds star ratings to topics
# version: 0.1
# authors: Your Name
# url: https://github.com/pafricana/imsV3

register_asset "stylesheets/ratings.scss"

after_initialize do
  Topic.register_custom_field_type('importance', :float)
  Topic.register_custom_field_type('feasibility', :float)
  Topic.register_custom_field_type('sort_value', :integer)
  
  require_dependency 'application_controller'
  
  module ::Ratings
    class Engine < ::Rails::Engine
      engine_name "ratings"
      isolate_namespace Ratings
    end
  end

  # Add rating endpoint
  add_to_class(:topics_controller, :rate) do
    topic = Topic.find_by(id: params[:topic_id])
    guardian.ensure_can_see!(topic)

    rating = TopicRating.find_or_initialize_by(
      topic_id: topic.id,
      user_id: current_user.id,
      rating_type: params[:rating_type]
    )
    rating.value = params[:value]
    rating.save!

    render json: success_json
  end

  Discourse::Application.routes.append do
    post "/topics/:topic_id/rate" => "topics#rate"
  end
end
