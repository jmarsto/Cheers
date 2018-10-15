class BeersController < ApplicationController

  def index
    @beers = Beer.order(:name)

  end

end
