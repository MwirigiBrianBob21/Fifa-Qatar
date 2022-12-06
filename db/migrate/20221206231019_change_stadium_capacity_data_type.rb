class ChangeStadiumCapacityDataType < ActiveRecord::Migration[7.0]
  def change
    change_column :internet_speeds, :stadium_capacity, :integer, using: 'stadium_temperatures::integer'

  end
end
