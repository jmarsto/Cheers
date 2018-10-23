class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :user_name, presence: true
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true
  validates :encrypted_password, presence: true
  validates :age, presence: true, numericality: { greater_than_or_equal_to: 21 }
  validates_uniqueness_of :user_name

  has_many :reviews

  mount_uploader :profile_photo, ProfilePhotoUploader

  def admin?
    role == "true"
  end

end
