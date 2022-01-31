class Argument < ApplicationRecord

    belongs_to :insight

    validates :argument, presence: true
    validates :explanation, presence: false
    validates :insight_id, presence: true

end
