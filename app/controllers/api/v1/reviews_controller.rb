class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    beer = Beer.find(params[:beer_id])
    reviews = beer.reviews
    render json: reviews
  end

  def create
    review = Review.new(review_params)
    review.user = current_user
    if review.save
      render json: review
    else
      render json: { errors: review.errors.full_messages}, status: :unprocessable_entity
    end
  end
  
  private
    def review_params
      params.require(:review).permit(:body, :rating, :beer_id, :user)
    end
end
