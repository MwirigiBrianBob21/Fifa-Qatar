class Temperature < ApplicationRecord
     # The temperature in degrees Celsius
  attr_accessor :temperature

  # The date and time when the temperature was recorded
  attr_accessor :recorded_at

  belongs_to :stadium
end
