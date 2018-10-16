class Api::V1::BeersController < ApplicationController

  def index
    beers = Beer.all
    render json: beers
  end

  def show
    beer = Beer.find(params[:id])
    reviews = beer.reviews
    obj = {
      beer: beer,
      reviews: reviews
    }
    render json: obj
  end
end
