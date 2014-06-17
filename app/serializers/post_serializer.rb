class PostSerializer < ActiveModel::Serializer
	embed :ids

  attributes :title, :body, :author, :created_at, :slug
  has_many :tags
end