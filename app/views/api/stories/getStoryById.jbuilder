json.story do 
    json.id @story.id
    json.title @story.title
    json.situation @story.situation
    json.complication @story.complication
    json.question @story.question
    json.answer @story.answer
    
    json.insights do 
        json.array! @story.insights do |insight|
            json.insightId insight.id
            json.insight insight.insight

            json.arguments do
                json.array! insight.arguments do |argument|
                    json.argumentId argument.id
                    json.argument argument.argument
                    json.explanation argument.explanation
                end
            end
            
        end
    end
end