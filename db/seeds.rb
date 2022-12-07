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
city: "Doha",
image_url: "https://images.unsplash.com/photo-1607627000458-210e8d2bdb1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8QWwlMjBXYWtyYWglMjBTdGFkaXVtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
},
{
name: "Khalifa International Stadium",
address: "Doha",
city: "Doha",
image_url: "https://www.example.com/khalifa-international-stadium.jpg"
},
{
name: "Al Bayt Stadium",
address: "Al Khor",
city: "Al Khor",
image_url: "https://www.example.com/al-bayt-stadium.jpg"
},
{
name: "Education City Stadium",
address: "Doha",
city: "Doha",
image_url: "https://www.example.com/education-city-stadium.jpg"
},
{
name: "Lusail Stadium",
address: "Lusail",
city: "Doha",
image_url: "https://www.example.com/lusail-stadium.jpg"
}
]

stadiums.each do |stadium|
  field = Field.create(name: stadium[:name], address: stadium[:address], city: stadium[:city], image_url: stadium[:image_url])

  # create internet_speed records for the field
  field.internet_speeds.create(stadium_temperatures: 70.0, stadium_capacity: 500, image_url: "https://www.example.com/internet-speed-1.jpg")
  field.internet_speeds.create(stadium_temperatures: 75.0, stadium_capacity: 1000, image_url: "https://www.example.com/internet-speed-2.jpg")
end

puts "Done seeding"
