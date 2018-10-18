class AddDescriptionToBeers < ActiveRecord::Migration[5.2]
  def change
    add_column :beers, :description, :string
  end
end
