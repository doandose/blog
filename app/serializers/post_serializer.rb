class PostSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :title, :description, :body, :published_at, :slug, :category_id, :author

  has_many :tags
  has_many :comments
  has_one :author
end