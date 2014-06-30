lock '3.2.0'

set :application, 'blog'
set :repo_url, 'git@github.com:doandose/blog.git'
set :branch, 'master'

set :deploy_to, '/home/blog/www/'
set :scm, :git

set :format, :pretty
set :log_level, :debug
set :pty, true
set :keep_releases, 3

set :nvm_path, '/home/blog/.nvm'
set :nvm_node, 'v0.10.10'
set :nvm_map_bins, %w{node npm bower}


namespace :deploy do

  desc 'Restart application'
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
      execute :touch, release_path.join('tmp/restart.txt')
    end
  end

  after 'npm:install', :copy_env do
    on roles(:app) do
      execute <<-CMD
        cp #{ deploy_to }shared/.env #{ release_path }/.env
      CMD
    end
  end

  after 'bower:install', 'npm:install'

  after :publishing, :restart
end