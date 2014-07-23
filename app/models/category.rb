class Category < ActiveRecord::Base
  extend FriendlyId
  friendly_id :title, use: :slugged

  default_scope -> { joins(:posts).uniq }

  # relationship
  has_many :posts

  has_attached_file :icon,
    styles: {
      medium: '50x50>',
      thumb: '30x30>'
    },
    default_url: '/images/:style/missing.png'

  validates_attachment_content_type :icon, content_type: /\Aimage\/.*\Z/
end