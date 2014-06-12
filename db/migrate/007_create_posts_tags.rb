class CreatePostsTags < ActiveRecord::Migration
  def change
    create_table :posts_tags, options: 'engine=MyISAM DEFAULT CHARSET=utf8', id: false do |t|
      t.references :posts, index: true
      t.references :tags, index: true
    end
  end
end
