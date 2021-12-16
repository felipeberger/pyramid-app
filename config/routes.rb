Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  
  root 'pages#home'

  get '/explanation' => 'pages#explanation'
  
  namespace :api do

    #Stories
    get '/stories/getall' => 'stories#getAllStories'

  end

end
