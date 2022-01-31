class RemoveDataFromArguments < ActiveRecord::Migration[6.1]
  def change
    remove_column :arguments, :data, :json
  end
end
