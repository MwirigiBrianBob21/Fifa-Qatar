class Stadium < ApplicationRecord
    # The name of the stadium
  # attr_accessor :name

  # The location of the stadium
  # attr_accessor :location

  # The capacity of the stadium
  # attr_accessor :capacity

  has_many :images

  has_many :temperatures
end
