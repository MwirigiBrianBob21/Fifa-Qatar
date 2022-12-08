module Api
  class StadiaController < ApplicationController
    def index
      stadia = Stadium.all.map do |stadium|
        {
          name: stadium.name,
          city: stadium.location,
          capacity: stadium.capacity
        }
      end

      render(json: { stadia: stadia } )
    end

    def show
      # Retrieve the Stadium with the given id
      stadium = Stadium.find_by(id: params[:id])
      if stadium
        # Use the stadium.images association to retrieve the associated Image records
        images = stadium.images

        # Map the images to a data structure suitable for rendering as JSON
        image_data = images.map do |image|
          {
            url: image.url,
            description: image.description
          }
        end

        # Render the Stadium and Image data as JSON
        render(json: {
          stadium: {
            name: stadium.name,
            city: stadium.location,
            capacity: stadium.capacity
          },
          images: image_data
        })
      else
        # If no Stadium was found with the given id, render an error message
        render(json: { error: "Stadium not found" }, status: 404)
      end
    end
  end
end
