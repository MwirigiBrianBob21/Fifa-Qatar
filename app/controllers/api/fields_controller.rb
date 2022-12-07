module Api
    class FieldsController < ApplicationController

        def index
            # fields = Field.all.map do |field|
                fields = show_similar_stadiums(params["search_input"]).map do |field|
                {
                    name: field.name,
                    city: field.city,
                    address: field.address,
                    recent_stadium_temperatures: field.internet_speeds.order('created_at DESC').first.try(:stadium_temperatures)

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

          
          def show_similar_stadiums(search_input)
            if search_input.blank?
              Field.all
            else
              Field.where("name LIKE :search_input OR city LIKE :search_input", search_input: "%#{search_input}%")
            end
          end


        
    end
end