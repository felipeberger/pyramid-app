class Story < ApplicationRecord
  belongs_to :user
  has_many :insights, dependent: :destroy
  has_many :arguments, through: :insights

  validates :title, presence: false
  validates :situation, presence: false
  validates :complication, presence: false
  validates :question, presence: false
  validates :answer, presence: false
  validates :user_id, presence: true

  after_create :create_insights_and_arguments

  def create_insights_and_arguments
    3.times do
      insight = self.insights.create

      3.times do 
        insight.arguments.create
      end
    end
  end

  def update_insights_and_arguments(front_end_data)
    self.insights.each do |insight|
      updated_insight = front_end_data.find { |value| value[:insightId] == insight.id }
      insight.insight = updated_insight[:insight]
      insight.save!
      
      insight.arguments.each do |argument|
        updated_argument = updated_insight[:arguments].find { |data| data[:argumentId] == argument.id }
            argument.argument = updated_argument[:argument]
            argument.explanation = updated_argument[:explanation]
            argument.save!
      end
    end
  end
end
