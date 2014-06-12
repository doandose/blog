class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts, options: 'engine=MyISAM DEFAULT CHARSET=utf8' do |t|
      t.string :title
      t.string :slug
      t.text :body
      t.references :author
      t.datetime :published_at
      t.timestamps
    end

    add_index :posts, [:author_id, :published_at]
    add_index :posts, :slug
    add_index :posts, :published_at
    add_index :posts, :author_id
  end
end
