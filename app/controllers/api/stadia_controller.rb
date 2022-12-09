module Api
  class StadiaController < BaseController
    def index
      stadia = get_matching_stadia(params["search_term"]).map do |stadium|
        {
          name: stadium.name,
          city: stadium.location,
          capacity: stadium.capacity,
          most_recent_download_speed: most_recent_download_speed(stadium),
          # most_recent_download_units: most_recent_download_units(stadium),
          number_of_measurements: number_of_measurements(stadium),
          image: stadium.images
        }
          
      
      end

      render(json: { stadia: stadia })
    end

    def most_recent_download_speed(stadium)
      # Assume that all the units are the same.
      stadium.internet_speeds.order("created_at").last&.download_speed
    end
    # def most_recent_download_units(stadium)
    #   stadium.internet_speeds.order("created_at").last&.download_units
    # end
    def number_of_measurements(stadium)
      stadium.internet_speeds.count
    end

    




    def get_matching_stadia(search_term)
      if search_term.blank?
        Stadium.all
      else
        Stadium.where("name LIKE :search_term OR location LIKE :search_term", search_term: "%#{search_term}%")
      end
    end
  end
end
