class User < ApplicationRecord

    has_many :stories, dependent: :destroy

    validates :email, presence: true, length: { minimum: 5, maximum: 500 }
  
    validates_uniqueness_of :email

end
