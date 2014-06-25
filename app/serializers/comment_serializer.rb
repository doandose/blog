class CommentSerializer < ActiveModel::Serializer
  attributes :id, :email, :body, :published_at
end