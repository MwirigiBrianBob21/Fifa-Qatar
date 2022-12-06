class RenameDownloadUnitsToStadiumTemperature < ActiveRecord::Migration[7.0]
  def change
    rename_column :internet_speeds, :download_units, :stadium_temperatures

  end
end
