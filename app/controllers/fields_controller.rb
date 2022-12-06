class FieldsController < ApplicationController
    def index
        # Place.all
       render "layouts/fields/index" 
    end
end