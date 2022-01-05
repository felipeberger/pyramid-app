Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  
  root 'pages#home'

  get '/explanation' => 'pages#explanation'
  get '/story' => 'pages#storyPage'
  
  namespace :api do

    #Stories
    get '/stories/:userId/getall' => 'stories#getAllUserStories'

  end

end
