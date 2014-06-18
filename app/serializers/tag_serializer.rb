class TagSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :name

  has_many :posts, serializer: PostSerializer
end