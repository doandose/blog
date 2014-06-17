class PostsController < ApplicationController
  def index
    posts = Post.published.recent
    render json: posts, status: :ok
  end

  def show
    post = Post.friendly.find(params[:id])
    render json: {post: post, tags: post.tags}, status: :ok
  end
end