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

namespace :deploy do
  desc 'Start application'
  task :start, roles(:app)
  after 'deploy:start', 'puma:start'

  desc 'Stop application'
  task :stop, roles(:app)
  after 'deploy:stop', 'puma:stop'

  desc 'Restart application'
  task :restart, roles(:app)
  after 'deploy:restart', 'puma:restart'

  after 'bower:install', 'npm:install'

  after 'npm:install', :copy_env do
    on roles(:app) do
      execute <<-CMD
        cp #{ deploy_to }shared/.env #{ release_path }/.env
      CMD
    end
  end

  before 'deploy:updated', 'bundler:install'
  after 'assets:precompile', 'puma:restart'
end