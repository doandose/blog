class PostSerializer < ActiveModel::Serializer
  attributes :title, :body, :author
end