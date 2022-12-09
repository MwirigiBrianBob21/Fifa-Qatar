class ImagesController < ApplicationController

    def new # Returns HTML
      render "pages/images/new"
    end

    def like
      # find the image with the specified id
      image = Image.find(params[:id])
  
      # increment the likes field for the image
      image.likes += 1
  
      # save the updated image to the database
      image.save
  
      # return the updated image data as a JSON response
      render json: image
    end
  end