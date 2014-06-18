class PostSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :title, :body, :created_at, :slug, :category_id, :author

  has_many :tags, serializer: TagSerializer
  has_many :comments, serializer: CommentSerializer
  has_one :author, serializer: AuthorSerializer
end