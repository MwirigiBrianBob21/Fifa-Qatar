class AddColumnsToImages < ActiveRecord::Migration[7.0]
  def change
    add_column :images, :url, :string
    add_column :images, :description, :string
    add_column :images, :stadium_id, :integer
  end
end
