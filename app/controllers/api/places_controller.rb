module Api
    class PlacesController < ApplicationController

        def index
            places = Place.all.map do |place|
                {
                    name: place.name,
                    city: place.city,
                    most_recent_stadium_temperatures: most_recent_stadium_temperatures(place),
                    most_recent_download_unit: most_recent_stadium_capacity(place),
                    number_of_measurements: number_of_measurements(place)

                }
            end

            render(json: {places: places})
        end

        def most_recent_stadium_temperatures(place)
            place.internet_speeds.order("created_at").last.stadium_temperatures
        end

        def most_recent_stadium_capacity(place)
            place.internet_speeds.order("created_at").last.stadium_capacity
        end

        def number_of_measurements(place)
            place.internet_speeds.count
        end
        
    end
end