class CreateStadia < ActiveRecord::Migration[7.0]
  def change
    create_table :stadia do |t|

      t.timestamps
    end
  end
end
