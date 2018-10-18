class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    reviews = Review.all
    render json: reviews
  end

  def create
    formData = JSON.parse(request.body.read)

    review = Review.new(body: formData["body"], rating: formData["rating"], beer_id: formData["beer_id"], user: current_user)

    if review.save
      render json: review
    else
      render json: { errors: review.errors.full_messages}, status: :unprocessable_entity
    end
  end
end
