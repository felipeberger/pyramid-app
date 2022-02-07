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

  def slideshow
    @data = { storyId: params[:storyId] }.to_json
    render 'slideshow'
  end

  def authenticate
    render 'authenticate'
  end
  
end
