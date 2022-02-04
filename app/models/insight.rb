class Insight < ApplicationRecord

    belongs_to :story
    has_many :arguments, dependent: :destroy

    validates :insight, presence: false
    validates :story_id, presence: true

end
