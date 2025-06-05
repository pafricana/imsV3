# frozen_string_literal: true

Fabricator(:topic_rating) do
  topic
  user
  rating_type "importance"
  value 1
end
