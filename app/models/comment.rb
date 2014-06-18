class Comment < ActiveRecord::Base
  include Imageable

  # relationship
  belongs_to :post

  scope :published, -> { where(published: true) }
end