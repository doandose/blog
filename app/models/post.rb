class Post < ActiveRecord::Base
  extend FriendlyId
  friendly_id :title, use: :slugged

  # relationship
  has_and_belongs_to_many :categories
  has_many :comments
  belongs_to :author
end