class Post < ActiveRecord::Base
  extend FriendlyId
  friendly_id :title, use: :slugged

  # relationship
  has_and_belongs_to_many :categories
  has_and_belongs_to_many :tags
  has_many :comments
  belongs_to :author

  # scope
  scope :recent, -> { order(:published_at) }
  scope :published, -> { where.not(published_at: nil) }
end