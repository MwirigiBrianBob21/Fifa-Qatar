class AddInternetSpeedTable < ActiveRecord::Migration[7.0]
  def change
    create_table :internet_speeds do |t|
   
   
    end
  end
end

# create_table "images", force: :cascade do |t|
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
#   t.string "url"
#   t.string "description"
#   t.integer "stadium_id"
# end