require 'stylus'
require 'sprockets'
require 'stylus/sprockets'

Stylus.use :nib

assets = Sprockets::Environment.new
assets.append_path(Rails.root.join('app/assets/stylesheets'))

Stylus.setup(assets)
Stylus.compile(File.read(Rails.root.join('app/assets/stylesheets','application.styl')))