class CategorySerializer < ActiveModel::Serializer
  embed :ids

  attributes :id, :title, :dominant_color, :slug

  has_many :posts
end