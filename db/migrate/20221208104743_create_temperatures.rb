class CreateTemperatures < ActiveRecord::Migration[7.0]
  def change
    create_table :temperatures do |t|

      t.timestamps
    end
  end
end
