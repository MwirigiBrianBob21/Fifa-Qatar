module Api
    class ImageController < BaseController
  
      def create
        stadium = Stadium.create!(
          name: params[:stadium_name],
          location: params[:stadium_city],
        #   address: params[:stadium_address]

        )
        
        image = Image.create!(
          stadium: stadium,
          url: params[:url],
          description: params[:description]
        )
  
        render(json: { }, status: :created) # Return 201 to client
      end
    end
  end