class AddCreatedAtColumnToInternetSpeeds < ActiveRecord::Migration[7.0]
  def change
    add_column :internet_speeds, :created_at, :datetime
  end
end
