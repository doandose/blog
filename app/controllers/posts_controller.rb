class PostsController < ApplicationController
  def index
  	page = (params[:page] || 1).to_i
    @posts = Post.recent.paginate(page: page, per_page: 2)

    render json: @posts, meta: { total_pages: @posts.total_pages, page: page }
  end

  def show
    render json: Post.friendly.find(params[:id]), status: :ok
  end
end