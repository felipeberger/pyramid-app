class RemoveDataColumnAndAddAgainAsJson < ActiveRecord::Migration[6.1]
  def change
    remove_column :arguments, :data
    add_column :arguments, :data, :json
  end
end
