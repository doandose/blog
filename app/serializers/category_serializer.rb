class CategorySerializer < ActiveModel::Serializer
  embed :ids

  attributes :id, :title, :slug

  has_many :posts
end