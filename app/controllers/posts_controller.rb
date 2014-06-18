class PostsController < ApplicationController
  def index
    render json: Post.published.recent, status: :ok
  end
end