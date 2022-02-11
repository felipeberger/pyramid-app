class AddTitleToStories < ActiveRecord::Migration[6.1]
  def change
    add_column :stories, :title, :string 
  end
end
