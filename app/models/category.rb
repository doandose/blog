class Category < ActiveRecord::Base
  # relationship
  has_and_belongs_to_many :posts
end