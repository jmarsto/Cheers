
require 'rails_helper'

RSpec.describe Api::V1::BeersController, type: :controller do
  let!(:beer_1) { Beer.create(name: "life", style: "light", ABV:"6.7", description: "yeah") }
  let!(:beer_2) { Beer.create(name: "beername", style: "dark", ABV:"10000", description: "yeah") }

  describe "GET#index" do
    it "should return a list of all the beers" do
      get :index
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"

      expect(returned_json["beers"].length).to eq 2

      expect(returned_json["beers"][0]["name"]).to eq "life"
      expect(returned_json["beers"][1]["name"]).to eq "beername"
    end
  end
end
