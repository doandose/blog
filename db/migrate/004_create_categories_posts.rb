class CreateCategoriesPosts < ActiveRecord::Migration
  def change
    create_table :categories_posts, options: 'engine=MyISAM DEFAULT CHARSET=utf8', id: false do |t|
      t.references :category, index: :true
      t.references :post, index: :true
    end
  end
end
