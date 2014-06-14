class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories, options: 'engine=MyISAM DEFAULT CHARSET=utf8' do |t|
      t.string :title
      t.string :slug
      t.timestamp
    end
  end
end
