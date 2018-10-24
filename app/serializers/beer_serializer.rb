class BeerSerializer < ActiveModel::Serializer
  attributes :id, :name, :style, :ABV, :description

end
