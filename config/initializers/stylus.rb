require 'stylus'

Stylus.compile(File.read(Rails.root.join('app/assets/stylesheets','application.styl')))
Stylus.use :nib