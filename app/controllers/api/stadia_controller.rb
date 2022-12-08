module Api
    class StadiaController < ApplicationController
  
      def index
        stadia = Stadium.all.map do |stadium|
          {
            name: stadium.name,
            city: stadium.location,
            # most_recent_download_speed: most_recent_download_speed(stadium),
            # most_recent_download_units: most_recent_download_units(stadium),
            # number_of_measurements: number_of_measurements(stadium)
            capacity: stadium.capacity
          }
        end

        render(json: { stadia: stadia} )
    end
  
     
    end
  end