class CommentsController < ApplicationController
  def create
    post = Post.find(params_comment[:post])
    params_comment.delete(:post)
    comment = Comment.new params_comment
    comment.post = post
    comment.save
  end

  private
  def params_comment
    params.require(:comment).permit!
  end
end