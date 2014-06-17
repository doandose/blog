class PostSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :title, :body, :author, :created_at, :slug

  has_many :tags, serializer: TagSerializer
end