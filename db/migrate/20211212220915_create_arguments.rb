class CreateArguments < ActiveRecord::Migration[6.1]
  def change
    create_table :arguments do |t|

      t.string "argument"
      t.string "explanation"
      t.string "data"

      t.timestamps
    end
  end
end
