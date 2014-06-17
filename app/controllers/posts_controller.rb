class PostsController < ApplicationController
  def index
    render json: Post.published.recent, status: :ok
  end

  def show
    render json: post, status: :ok
  end
end