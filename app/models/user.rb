class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable

  def name
    "#{first_name} #{last_name}"
  end

  def self.find_for_oauth(auth, signed_in_resource = nil)
    identity = Identity.find_for_oauth(auth)
    user = signed_in_resource ? signed_in_resource : identity.user

    # Create the user if it's a new registration
    if user.nil?
      user = User.where(email: auth.info.email).first if auth.info.email
      if user.nil?
        user = User.new
        user.email = auth.info.email
        name = auth.info.name.split(' ')
        user.first_name = name.first
        user.last_name = name.last
        user.password = Devise.friendly_token[0,20]
        user.save!
      end
    end

    # Associate the identity with the user if needed
    if identity.user != user
      identity.user = user
      identity.save!
    end

    user
  end
end
