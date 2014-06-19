class AuthorSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :name, :email, :avatar

  has_many :posts
end