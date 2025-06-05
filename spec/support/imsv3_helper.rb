# frozen_string_literal: true

module ImsV3Helper
  def setup_topic_ratings
    SiteSetting.imsv3_enabled = true
  end
end

RSpec.configure do |config|
  config.include ImsV3Helper
end
