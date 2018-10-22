class BeerSerializer < ActiveModel::Serializer
  attributes :id, :name, :style, :ABV, :description

  # ideally dis plz
  attributes :id, :name, :style, :ABV, :description, :reviews
  has_many :reviews
end
