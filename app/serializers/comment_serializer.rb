class CommentSerializer < ActiveModel::Serializer
  attributes :id, :email, :body, :avatar
end