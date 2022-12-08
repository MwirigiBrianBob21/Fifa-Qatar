class AddColumnsToStadia < ActiveRecord::Migration[7.0]
  def change
    add_column :stadia, :name, :string
    add_column :stadia, :location, :string
    add_column :stadia, :capacity, :integer
  end
end
