class BeerSerializer < ActiveModel::Serializer
  attributes :id, :name, :style, :ABV

end
