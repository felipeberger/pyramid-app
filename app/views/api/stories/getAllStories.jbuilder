# json.stories do
#     json.array @stories do |story|
#         json.id story.id
#         json.situation story.situation
#         json.complication story.complication
#         json.question story.question
#         json.answer story.answer
#     end
# end

json.stories do
    json.id @stories.id
    json.situation @stories.situation
    json.complication @stories.complication
    json.question @stories.question
    json.answer @stories.answer
    json.insights @stories.insights
end