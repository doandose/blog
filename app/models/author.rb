class Author < ActiveRecord::Base
  include Imageable

  has_many :posts
end