require 'rails_helper'

RSpec.describe Api::V1::BeersController, type: :controller do
  let!(:beer_1) { Beer.create(name: "life", style: "light", ABV:"6.7", description: "yeah") }
  let!(:beer_2) { Beer.create(name: "beername", style: "dark", ABV:"10000", description: "yeah") }
  let!(:user_1) { User.create(user_name: "Bob123", first_name: "Bob", last_name:"Jones", email: "bob@jones.com", encrypted_password: "123", age: 24) }
  let!(:review_1) { Review.create(body: "beername", rating: 10, user_id: user_1.id, beer: beer_1) }

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

  describe "POST#create" do
    it "creates a new Beer" do
      beer_params = { name: "life", style: "light", description: "yeah!", ABV: "6.7"}
      prev_count = Beer.count
      post(:create, params: {beer: beer_params})
      expect(Beer.count).to eq(prev_count + 1)
    end
  end
end
