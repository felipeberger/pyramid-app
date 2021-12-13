class Insight < ApplicationRecord

    belongs_to :story
    has_many :arguments

    validates :insight, presence: true
    validates :story_id, presence: true

end
