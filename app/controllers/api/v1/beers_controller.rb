class Api::V1::BeersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Beer.all
  end

  def create
    newBeer = Beer.new(beer_params)

    if newBeer.save
      render json: newBeer
    else
      render json: { errors: newBeer.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    render json: Beer.find(params[:id])
  end

  def destroy
    beer = Beer.find(params[:id])
    if current_user.admin?
      beer.destroy
      render json: { beer_id: beer.id }
    else
      render json: { error: "You must be an admin to delete"}, status: :unprocessable_entity
    end
  end

  private
    def beer_params
      params.require(:beer).permit(:name, :style, :description, :ABV)
    end
end
