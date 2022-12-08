class AddColumnsToTemperatures < ActiveRecord::Migration[7.0]
  def change
    add_column :temperatures, :value, :float
    add_column :temperatures, :unit, :string
    add_column :temperatures, :recorded_at, :datetime
    add_column :temperatures, :location, :string
  end
end
