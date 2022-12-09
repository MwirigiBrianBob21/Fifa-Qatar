class AddColumnsToInternetSpeed < ActiveRecord::Migration[7.0]
  def change
    
        add_column :internet_speeds, :download_speed, :decimal
        add_column :internet_speeds, :download_units, :float
        add_column :internet_speeds, :stadium_id, :integer
        # add_column :internet_speeds, :value, :float
     
  end
end
