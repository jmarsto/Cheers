class CommentSerializer < ActiveModel::Serializer
  attributes :username, :id, :body, :created_at, :updated_at

  belongs_to :user
  belongs_to :review

  def username
    object.user.user_name
  end
end
