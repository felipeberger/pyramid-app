class Story < ApplicationRecord

    belongs_to :user
    has_many :insights, dependent: :destroy
    has_many :arguments, through: :insights

    validates :situation, presence: true
    validates :complication, presence: true
    validates :question, presence: true
    validates :answer, presence: true
    validates :user_id, presence: true

end
