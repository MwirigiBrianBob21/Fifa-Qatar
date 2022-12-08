class Image < ApplicationRecord
      # The URL of the image
  attr_accessor :url

  # The description of the image
  attr_accessor :description

  belongs_to :stadium
end
