# frozen_string_literal: true

require File.expand_path("../../config/environment", __FILE__)
require "rails/test_help"
require "mocha/minitest"

class ActiveSupport::TestCase
  setup do
    SiteSetting.imsv3_enabled = true
  end
end
