class AddAtmosphereTable < ActiveRecord::Migration[7.0]
  def change
    create_table :atmospheres, id: :uuid do |t|
      t.references :places, null: false, foreign_key: true, index: true, type: :uuid
      t.integer :stadium_capacity, nulal: false
      t.float :stadium_temperature, null: false

      t.string :images, null: false
      # t.string :city, null: false

      t.timestamps
    end
  end
end
