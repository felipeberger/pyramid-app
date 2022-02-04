class Story < ApplicationRecord

    belongs_to :user
    has_many :insights, dependent: :destroy
    has_many :arguments, through: :insights

    validates :situation, presence: false
    validates :complication, presence: false
    validates :question, presence: false
    validates :answer, presence: false
    validates :user_id, presence: true

end
