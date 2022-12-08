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

images = [
  { url: "image1.jpg", description: "Image 1", stadium_id: 1 },
  { url: "image2.jpg", description: "Image 2", stadium_id: 1 },
  { url: "image3.jpg", description: "Image 3", stadium_id: 2 },
  { url: "image4.jpg", description: "Image 4", stadium_id: 3 },
  { url: "image5.jpg", description: "Image 5", stadium_id: 4 }
]

images.each do |image|
  # Make sure that the stadium_id value corresponds to an existing Stadium record
  stadium = Stadium.find_by(id: image[:stadium_id])
  if stadium
    Image.create!(image)
  end
end

# temperatures.each do |temp|
# Temperature.create!(image)
# end

puts "Done seeding"