class AddStoryToInsights < ActiveRecord::Migration[6.1]
  def change
    add_reference :insights, :story, foreign_key: true 
  end
end
