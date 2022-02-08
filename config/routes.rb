Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  
  root 'pages#home'

  get '/explanation' => 'pages#explanation'
  get '/story/:storyId' => 'pages#storyPage'
  get '/story/:storyId/slideshow' => 'pages#slideshow'
  get '/authenticate' => 'pages#authenticate'
  
  namespace :api do

    #Stories
    get '/stories/fetch/:storyId' => 'stories#getStoryById'
    get '/stories/getall' => 'stories#getAllUserStories'
    put '/stories/new' => 'stories#createStory'
    put '/stories/saveStory/:storyId' => 'stories#saveStory'
    delete '/stories/delete/:storyId' => 'stories#delete'

    #Users
    put '/users/new' => 'users#create'

  end

end
