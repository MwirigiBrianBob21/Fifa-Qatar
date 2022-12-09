class Stadium < ApplicationRecord


  has_many :images

  has_many :temperatures

  has_many :internet_speeds

  def self.reset_sequence!
    ActiveRecord::Base.connection.reset_pk_sequence!(table_name)
  end
end
