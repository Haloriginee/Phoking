# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :text             not null
#  username        :text             not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :email, :session_token, presence: true, uniqueness: true
  validates :username, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token

  has_one :mylist,
          foreign_key: :user_id,
          class_name: :List

  has_many :previous_views,
           class_name: :PreviousView,
           foreign_key: :user_id

  has_many :previously_viewed_videos,
           through: :previous_views,
           source: :video

  has_many :videos_on_list,
           through: :mylist,
           source: :video

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.is_password?(password)
    return user
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.update!(session_token: User.generate_session_token)
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
