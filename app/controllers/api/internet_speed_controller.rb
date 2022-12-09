module Api
    class InternetSpeedController < BaseController
  
      def create
        stadium = Stadium.create!(
          name: params[:stadium_name],
          location: params[:stadium_city],
        #   address: params[:stadium_address]
        )
  
        speed = InternetSpeed.create!(
          stadium: stadium,
          download_speed: params[:download_speed],
          download_units: params[:download_units]
        )
  
        render(json: { }, status: :created) # Return 201 to client
      end
    end
  end