class CommentsController < ApplicationController
  def index
    comments = Post.friendly.find(params[:id]).comments.published
    render json: comments, status: :ok
  end
end