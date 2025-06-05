# frozen_string_literal: true

require File.expand_path("../../config/environment", __FILE__)
require "rails/test_help"
require "mocha/minitest"

module TestHelper
  def setup_discourse
    SiteSetting.imsv3_enabled = true
  end
end

class ActiveSupport::TestCase
  include TestHelper
end
