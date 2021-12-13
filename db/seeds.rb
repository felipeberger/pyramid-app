# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


users = User.create([
    {username: 'Bob', email: 'bob@test.com', password: 'password'},
    {username: 'Bill', email: 'bill@test.com', password: 'password'}
])

stories = Story.create([
    {situation: 'Client is a top 3 used car dealership', complication: 'Sales of cars have decreased by 10% year on year for the past 3 years', question: 'How can the client increase sales', answer: 'Client should diversify into motorcycles and scooters to target urban youth', user: users.first},
    {situation: 'Client is a local coworking space', complication: 'Membership of coworking declines during summer months', question: 'How can the coworking space retain membership during summer months?', answer: 'Coworking space should air condition main working areas and invest in bringing in business speakers and other events that will benefit users that retain their membership', user: users.first}
])

insights = Insight.create([
    {insight: 'Large car sales have decreased in urban areas due to high cost of ownership and stagnant wages', story: stories.first},
    {insight: 'Electric scooters have made public transportation more accessible, making driving to work not the only option anymore', story: stories.first},
    {insight: 'Young consumers are more environmentally conscious, so they look for high efficiency cars or other efficient means of transportation such as motorcycles', story: stories.first}
])

arguments = Argument.create([
    {argument:'Parking costs are a large part of cost of ownership in urban areas',explanation:'The cost of parking has increased by an average of 10% YoY over the last decade in major urban areas',insight: insights.first,data:{'rows':{'new york':{'2010':'300','2011':'315', '2012':'350', '2013':'360'}, 'chicago':{'2010':'200','2011':'215', '2012':'250', '2013':'260'}}}},
    {argument:'Repair cost for cars of more than 5 years of age are 200% higher per year than for newer cars',explanation:'Once cars pass the 5 year mark, the cost to repair increases dramatically, which makes the cost of ownership higher than for new cars, even if the initial cost is lower',insight:insights.first,data:{'rows':{'repair cost':{'2010':'300','2011':'315','2012':'350','2013':'360'}}}},
    {argument:'Wages for most common jobs have not increased in line with inflation, while the price for used cars has tracked inflation over the same time period',explanation: 'Used cars used to be the accessible option for workers in lower wage positions, but the cost of purchase is now out of reach for many workers who might have considered buying one in the past',insight:insights.first,data:{'rows':{'purchase cost':{'2010':'4000','2011':'4300', '2012':'4500', '2013':'5000'},'wages':{'2010':'32000','2011':'32200', '2012':'32300', '2013':'32500'}}}}
])

