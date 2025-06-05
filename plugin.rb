# frozen_string_literal: true

# name: imsv3
# about: Adds star ratings to topics
# version: 0.1
# authors: Your Name
# url: https://github.com/pafricana/imsV3

enabled_site_setting :imsv3_enabled
register_asset "stylesheets/ratings.scss"

after_initialize do
  Topic.register_custom_field_type('rating', :integer)
end
