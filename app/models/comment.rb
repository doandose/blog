class Comment < ActiveRecord::Base
  # relationship
  belongs_to :post
end