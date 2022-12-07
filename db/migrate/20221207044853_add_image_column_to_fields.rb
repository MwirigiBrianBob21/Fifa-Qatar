class AddImageColumnToFields < ActiveRecord::Migration[7.0]
  def change
    add_column :fields, :image_url, :string, after: :city

  end
end
