class PostSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :title, :body, :author, :created_at, :slug, :tags

  has_many :tags, serializer: TagSerializer#, key: :tag_ids, root: :tag_objects#, embed: :objects
end