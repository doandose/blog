class CommentSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :email, :body, :published_at, :post

  has_one :post
end