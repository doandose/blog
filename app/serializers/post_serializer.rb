class PostSerializer < ActiveModel::Serializer
  attributes :title, :body, :author, :tags

  has_many :comments

  def comments
    object.comments.published
  end
end