class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :username, :body, :rating, :created_at, :profile_photo

  belongs_to :user


  def username
    object.user.user_name
  end

  def profile_photo
    object.user.profile_photo
  end
end
