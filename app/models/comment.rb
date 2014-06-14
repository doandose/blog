class Comment < ActiveRecord::Base
  # relationship
  belongs_to :post

  scope :published, -> { where(published: true) }
end