class CommentSerializer < ActiveModel::Serializer
  attributes :email, :body, :avatar, :id
end