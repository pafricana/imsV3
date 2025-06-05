# frozen_string_literal: true

module ImsV3
  class Engine < ::Rails::Engine
    engine_name ImsV3::PLUGIN_NAME
    isolate_namespace ImsV3
  end
end
