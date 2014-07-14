class CreateAuthors < ActiveRecord::Migration
  def change
    create_table :authors, options: 'engine=MyISAM DEFAULT CHARSET=utf8' do |t|
      t.string :name
      t.string :email
      t.string :linkedin
    end
  end
end