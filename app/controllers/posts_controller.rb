class PostsController < ApplicationController
  def index
    render json: Post.published, status: :ok
  end

  def show
    post = Post.friendly.find(params[:id])
    render json: post, status: :ok
  end
end