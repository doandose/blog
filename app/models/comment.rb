class Comment < ActiveRecord::Base
  include Imageable

  # relationship
  belongs_to :post

  default_scope -> { where.not(published_at: nil) }
end