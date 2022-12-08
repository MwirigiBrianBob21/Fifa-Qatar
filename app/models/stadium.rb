class Stadium < ApplicationRecord


  has_many :images

  has_many :temperatures

  def self.reset_sequence!
    ActiveRecord::Base.connection.reset_pk_sequence!(table_name)
  end
end
