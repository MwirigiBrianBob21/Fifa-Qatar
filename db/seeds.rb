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
  { url: "http://stadiumdb.com/pic-projects/al_bayt_stadium/al_bayt_stadium01.jpg", description: "TThe venue's stands surround the pitch on all sides and have been divided into three levels. They are equipped with plastic seats, mostly in red. The colour scheme is enhanced by black horizontal stripes with traditional Bedouin 'orchard' patterns. This motif is also repeated in the interior decoration of the stadium.", stadium_id: 1 },
  { url: "http://stadiumdb.com/pic-projects/al_bayt_stadium/al_bayt_stadium01.jpg", description: "the stadium is equipped with a cooling system. As one of two venues for this World Cup (alongside Al Janoub Stadium), the stadium also has a retractable roof that opens and closes in about 20 minutes. As well as providing protection from the (rare in this area) rains, the closed body of the venue makes it easier to control the temperature inside.", stadium_id: 1 },
  { url: "http://stadiumdb.com/pictures/stadiums/qat/al_wakrah_stadium/al_wakrah_stadium12m.jpg", description: "The stadium has received a lot of publicity for the interpretation of its appearance, which, however, differs significantly from the official version. Shortly after the visualisation was published (autumn 2013), comparisons of the stadium's exterior to female genitalia appeared in the media, suggesting that it was closer to a woman's vagina than to a traditional boat. There was even speculation that it was a feminist manifesto to draw attention to women's rights in the Middle East. However, Zaha Hadid strongly denied such reports.", stadium_id: 2 },
  { url: "http://stadiumdb.com/pictures/tournaments/wc_2022/education_city_stadium/education_city_stadium12.jpg", description: "The auditorium is fully covered by a roof, under which floodlights have been installed. Outside, the canopy connects to the façade, with which it forms a single unit, covered with metallic, rhombus-shaped panels. The colour of the panels changes depending on the angle of the sunlight, and at night the building can be illuminated. The façade is also equipped with solar panels.", stadium_id: 3 },
  { url: "http://stadiumdb.com/pic-projects/lusail_stadium/lusail_stadium01.jpg", description: "The stadium has a football-specific layout, with stands located just behind the pitch and surrounding it on all sides. I loved it", stadium_id: 5 },
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