# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_12_07_044853) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pgcrypto"
  enable_extension "plpgsql"

  create_table "atmospheres", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "stadiums_id", null: false
    t.integer "stadium_capacity", null: false
    t.float "stadium_temperature", null: false
    t.string "images", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["stadiums_id"], name: "index_atmospheres_on_stadiums_id"
  end

  create_table "fields", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.string "city", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_url"
  end

  create_table "internet_speeds", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "field_id", null: false
    t.float "stadium_temperatures", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "stadium_capacity"
    t.string "image_url"
    t.index ["field_id"], name: "index_internet_speeds_on_field_id"
  end

  create_table "stadiums", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.string "location", null: false
    t.string "city", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "atmospheres", "stadiums", column: "stadiums_id"
  add_foreign_key "internet_speeds", "fields"
end
