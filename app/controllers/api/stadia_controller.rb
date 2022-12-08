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

        render(json: { stadia: stadia} )

        
    end


  
     
    end
  end