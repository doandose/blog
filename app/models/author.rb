class Author < ActiveRecord::Base
  def avatar
    hash = Digest::MD5.hexdigest(email)
    "http://www.gravatar.com/avatar/#{ hash }"
  end
end