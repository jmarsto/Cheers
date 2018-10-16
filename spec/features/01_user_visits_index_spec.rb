require 'rails_helper'

feature "visitor sees a list of beers" do
  xscenario "sees a list of beers, their type, and alcohol content" do

    beer_one = Beer.create(name: "Alans beer", style: "New England IPA", ABV: "12.2")
    beer_two = Beer.create(name: "Jacks beer", style: "Mexican Lager", ABV: "4.2")

    visit '/'

    expect(page).to have_content beer_one.name
    expect(page).to have_content beer_two.style
    expect(page).to have_content "4.2%"
  end
end
