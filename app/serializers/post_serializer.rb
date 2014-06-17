class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :author, :created_at, :slug

  has_many :tags
end