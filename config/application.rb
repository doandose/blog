require File.expand_path('../boot', __FILE__)

require 'rails/all'
Bundler.require(*Rails.groups)

module Blog
  class Application < Rails::Application
    config.active_record.timestamped_migrations = false
  end
end
