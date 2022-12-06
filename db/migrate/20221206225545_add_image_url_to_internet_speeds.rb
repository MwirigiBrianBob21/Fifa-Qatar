class AddImageUrlToInternetSpeeds < ActiveRecord::Migration[7.0]
  def change
    add_column :internet_speeds, :image_url, :string, after: :stadium_capacity

  end
end
