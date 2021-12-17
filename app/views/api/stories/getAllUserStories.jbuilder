json.user do
    json.username @user.username
    json.userID @user.id

    json.stories do 
        json.array! @user.stories do |story|
            json.storyId story.id
            json.situation story.situation
            json.complication story.complication
            json.question story.question
            json.answer story.answer
            json.insights story.insights

        end
    end
end