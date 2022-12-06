# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

stadiums = [
  {
    name: "Al Wakrah Stadium",
    address: "Al Wakrah",
    city: "Doha"
  },
  {
    name: "Khalifa International Stadium",
    address: "Doha",
    city: "Doha"
  },
  {
    name: "Al Bayt Stadium",
    address: "Al Khor",
    city: "Al Khor"
  },
  {
    name: "Education City Stadium",
    address: "Doha",
    city: "Doha"
  },
  {
    name: "Lusail Stadium",
    address: "Lusail",
    city: "Doha"
  }
]

stadiums.each do |stadium|
  Field.create(name: stadium[:name], address: stadium[:address], city: stadium[:city])
end

puts "Done seeding"