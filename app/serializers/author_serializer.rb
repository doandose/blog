class AuthorSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :name, :email

  has_many :posts
end