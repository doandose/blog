class CreateCategoriesPosts < ActiveRecord::Migration
  def change
    create_table :categories_posts, options: 'engine=MyISAM DEFAULT CHARSET=utf8', id: false do |t|
      t.references :categories, index: :true
      t.references :posts, index: :true
    end
  end
end
