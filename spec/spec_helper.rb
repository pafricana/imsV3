# frozen_string_literal: true

require 'rails_helper'

RSpec.configure do |config|
  config.before(:suite) do
    SiteSetting.imsv3_enabled = true
  end
end
