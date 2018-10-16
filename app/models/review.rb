class Review < ApplicationRecord
  belongs_to :beer
  belongs_to :user

  validates :body, presence: true
  validates :rating, presence: true
end
