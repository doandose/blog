class PostsController < ApplicationController
  def index
    render json: Post.recent, status: :ok
  end

  def show
    render json: Post.friendly.find(params[:id]), status: :ok
  end
end