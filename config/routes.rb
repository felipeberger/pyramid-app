Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  
  root 'pages#home'

  get '/explanation' => 'pages#explanation'
  get '/story/:storyId' => 'pages#storyPage'
  get '/story/argument/:argumentId' => 'pages#argument'
  
  namespace :api do

    #Stories
    get '/stories/:storyId' => 'stories#getStoryById'
    get '/stories/:userId/getall' => 'stories#getAllUserStories'
    put '/stories/saveStory/:storyId' => 'stories#saveStory'

  end

end
