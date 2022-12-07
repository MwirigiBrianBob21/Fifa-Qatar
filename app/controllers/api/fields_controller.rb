module Api
    class FieldsController < ApplicationController

        def index
            fields = Field.all.map do |place|
                {
                    name: place.name,
                    city: place.city,
                    address: place.address,
                    recent_stadium_temperatures: place.internet_speeds.order('created_at DESC').first.try(:stadium_temperatures)

                }
            end

            render(json: {fields: fields})
        end

        private
        def most_recent_stadium_temperatures
            field = Field.find(params[:id])
            recent_speed = field.internet_speeds.order(created_at: :desc).first
            recent_temperature = recent_speed&.stadium_temperatures
          
            render(json: {field_id: field.id, most_recent_stadium_temperature: recent_temperature})
          end
          




        
    end
end