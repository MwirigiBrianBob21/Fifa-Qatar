module Api
    class ImagesController < BaseController
      # class ImageController < ApplicationController
      def index
        # perform a JOIN operation on the images and stadiums tables
        # to include the stadium_name field in the response data
        images = Image.joins(:stadium).select("images.*, stadia.name as stadium_name")
    
        # return the images as a JSON response
        render json: images
      end
      
    #   def create
    #     stadium = Stadium.create!(
    #       name: params[:stadium_name],
    #       location: params[:stadium_city],
    #     #   address: params[:stadium_address]

    #     )
        
    #     image = Image.create!(
    #       stadium: stadium,
    #       url: params[:url],
    #       description: params[:description]
    #     )
  
    #     render(json: { }, status: :created) # Return 201 to client
    #   end
    end
end