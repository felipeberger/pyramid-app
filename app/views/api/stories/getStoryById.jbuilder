json.story do 
    json.id @story.id
    json.situation @story.situation
    json.complication @story.complication
    json.question @story.question
    json.answer @story.answer
    
    json.insights do 
        json.array! @story.insights do |insight|
            json.insightId insight.id
            json.insight insight.insight
            json.arguments insight.arguments
        end
    end
end