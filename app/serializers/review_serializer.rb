class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :username, :body, :rating, :created_at

  belongs_to :user
  has_many :comments

  def username
    object.user.user_name
  end
end
