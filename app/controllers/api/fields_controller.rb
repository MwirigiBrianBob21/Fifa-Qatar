module Api
    class FieldsController < ApplicationController

        def index
            fields = Field.all.map do |place|
                {
                    name: place.name,
                    city: place.city,
                    address: place.address

                }
            end

            render(json: {fields: fields})
        end

        
    end
end