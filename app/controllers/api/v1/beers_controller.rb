class Api::V1::BeersController < ApplicationController

  def index
    render json: Beer.all
  end

  def show
    render json: Beer.find(params[:id]), serializer: BeerShowSerializer
  end
end
