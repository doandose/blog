class PostSerializer < ActiveModel::Serializer
  attributes :title, :body, :author, :categories, :tags
end