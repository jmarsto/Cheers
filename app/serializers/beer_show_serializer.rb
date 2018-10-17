class BeerShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :style, :ABV, :description

  has_many :reviews
end
