class AddTimeStampsToStadia < ActiveRecord::Migration[7.0]
  def change
    change_table :stadia do |t|
      t.timestamps null: false
    end
  end
end
