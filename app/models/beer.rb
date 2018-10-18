class Beer < ApplicationRecord
  validates :name, presence: true
  validates :style, presence: true
  
  has_many :reviews
end
