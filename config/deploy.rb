lock '3.2.0'

set :application, 'blog'
set :repo_url, 'git@github.com:doandose/blog.git'
set :branch, 'capistrano'

set :deploy_to, '/home/blog/www/'
set :scm, :git

set :format, :pretty
set :log_level, :debug
set :pty, true
set :keep_releases, 3

set :nvm_path, '/home/blog/.nvm'
set :nvm_node, 'v0.10.10'
set :nvm_map_bins, %w{node npm bower}

set :rvm_ruby_version, 'ruby-2.1.1@blog'

set :bundle_flags, ''
set :bundle_path, -> {}
set :bundle_binstubs, -> {}
set :bundle_env_variables, {}

set :puma_bind, "unix://#{ shared_path }/tmp/sockets/puma.sock"
set :puma_access_log, "#{ shared_path }/log/puma_error.log"
set :puma_error_log, "#{ shared_path }/log/puma_access.log"
set :puma_env, fetch(:rails_env, 'production')
set :puma_threads, [0, 4]
set :puma_workers, 2
set :puma_init_active_record, true
set :puma_preload_app, true

namespace :deploy do
  after 'bower:install', 'npm:install'

  after 'npm:install', :copy_env do
    on roles(:app) do
      execute <<-CMD
        cp #{ deploy_to }shared/.env #{ release_path }/.env
      CMD
    end
  end

  before 'deploy:updated', 'bundler:install'
  after :publishing, :restart
end