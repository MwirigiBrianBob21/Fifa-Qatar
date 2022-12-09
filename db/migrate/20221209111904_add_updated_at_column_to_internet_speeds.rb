class AddUpdatedAtColumnToInternetSpeeds < ActiveRecord::Migration[7.0]
  def change
    add_column :internet_speeds, :updated_at, :datetime
  end
end
