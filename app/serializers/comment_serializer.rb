class CommentSerializer < ActiveModel::Serializer
  attributes :id, :email, :body, :avatar, :published_at
end