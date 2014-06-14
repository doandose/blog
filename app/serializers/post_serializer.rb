class PostSerializer < ActiveModel::Serializer
  attributes :title, :body, :author, :created_at, :slug, :tags
end