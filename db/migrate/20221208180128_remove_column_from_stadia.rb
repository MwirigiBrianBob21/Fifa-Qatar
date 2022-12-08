class RemoveColumnFromStadia < ActiveRecord::Migration[7.0]
  def change
    remove_column :stadia, :created_at
    remove_column :stadia, :updated_at


  end
end
