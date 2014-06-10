class Post < ActiveRecord::Base
  # relationship
  has_and_belongs_to :categories
  has_many :comments
end