class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags, options: 'engine=MyISAM DEFAULT CHARSET=utf8' do |t|
      t.string :name
    end
  end
end
