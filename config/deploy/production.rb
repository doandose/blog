set :stage, :production
role :app, %w{blog}
role :web, %w{blog}
role :db,  %w{blog}