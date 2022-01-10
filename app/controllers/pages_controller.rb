class PagesController < ApplicationController
  def home
    render 'home'
  end

  def explanation 
    render 'explanation'
  end

  def storyPage
    @data = { storyId: params[:storyId] }.to_json
    render 'storyPage'
  end
  
end
