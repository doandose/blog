class Comment < ActiveRecord::Base
  # relationship
  belongs_to :post

  #default_scope -> { where.not(published_at: nil) }
  validates_presence_of :email, :body, :name
end