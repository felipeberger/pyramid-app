json.user do
    json.userEmail @user.email
    json.userID @user.id

    json.stories do 
        json.array! @user.stories do |story|
            json.title story.title
            json.storyId story.id
            json.situation story.situation
            json.complication story.complication
            json.question story.question
            json.answer story.answer

            json.insights do
                json.array! story.insights do |insight|
                    json.insight insight.insight
                    json.arguments insight.arguments
                end
            end

        end
    end
end