class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :username, :body, :rating, :created_at

  belongs_to :user


  def username
    object.user.user_name
  end
end
