class CategorySerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :title, :slug

  has_many :posts, serializer: PostSerializer
end