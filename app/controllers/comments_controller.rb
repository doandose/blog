class CommentsController < ApplicationController
  def create
    post = Post.find(params_comment[:post_id])
    params_comment.delete(:post_id)
    comment = Comment.new params_comment
    comment.post = post

    if comment.save
      render json: comment, status: :ok
    else
      render json: comment.errors, status: 422
    end
  end

  private
  def params_comment
    params.require(:comment).permit!
  end
end