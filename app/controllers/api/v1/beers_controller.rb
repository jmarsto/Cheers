class Api::V1::BeersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }


  def index
    render json: Beer.all
  end

  def create
    newBeerData = JSON.parse(request.body.read)
binding.pry
    newBeer = Beer.new(name: newBeerData["name"], style: newBeerData["style"], description: newBeerData["description"], ABV: newBeerData["ABV"])

    if newBeer.save
      render json: newBeer
    else
      render json: { errors: newBeer.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    render json: Beer.find(params[:id]), serializer: BeerShowSerializer
  end

end
