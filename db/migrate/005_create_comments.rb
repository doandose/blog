class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments, options: 'engine=MyISAM DEFAULT CHARSET=utf8' do |t|
      t.datetime :published_at
      t.string :email
      t.text :body
      t.references :post
    end

    add_index :comments, :post_id
  end
end
