class ChangeStadiumTemperaturesDataType < ActiveRecord::Migration[7.0]
  def change
    change_column :internet_speeds, :stadium_temperatures, :float, using: 'stadium_temperatures::double precision'

  end
end
