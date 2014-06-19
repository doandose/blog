class Category < ActiveRecord::Base
  extend FriendlyId
  friendly_id :title, use: :slugged

  # relationship
  has_many :posts

  default_scope -> { joins(:posts).uniq }
end