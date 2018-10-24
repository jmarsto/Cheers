class Review < ApplicationRecord
  belongs_to :beer
  belongs_to :user

  has_many :comments

  validates :body, presence: true
  validates :rating, presence: true, numericality: true
end
