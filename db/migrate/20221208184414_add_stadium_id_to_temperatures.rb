class AddStadiumIdToTemperatures < ActiveRecord::Migration[7.0]
  def change
    add_column :temperatures, :stadium_id, :integer

  end
end
