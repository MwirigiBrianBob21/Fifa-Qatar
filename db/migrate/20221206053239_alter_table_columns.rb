class AlterTableColumns < ActiveRecord::Migration[7.0]
  def change
  
  remove_column :internet_speeds, :download_units
  add_column :internet_speeds, :stadium_temperatures, :float
  end
end
