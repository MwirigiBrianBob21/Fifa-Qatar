# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


stadia = [
  { name: "Al-Bayt Stadium", location: "Al-Khor", capacity: 60442 },
  { name: "Al-Janoub Stadium", location: "Al-Wakrah", capacity: 40330 },
  { name: "Education City Stadium", location: "Doha", capacity: 46442 },
  { name: "Khalifa International Stadium", location: "Doha", capacity: 66800 },
  { name: "Lusail Stadium", location: "Lusail", capacity: 86000 }
]

stadia.each do |stadium|
  Stadium.create!(stadium)
end

puts "Done seeding"