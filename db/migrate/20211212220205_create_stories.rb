class CreateStories < ActiveRecord::Migration[6.1]
  def change
    create_table :stories do |t|
      t.string "situation"
      t.string "complication"
      t.string "question"
      t.string "answer"
      
      t.timestamps
    end
  end
end
