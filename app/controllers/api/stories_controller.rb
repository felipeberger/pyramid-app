module Api
  require('json')

  class StoriesController < ApplicationController
      
    # TODO add security (check user is logged in and is the owner of stories for example)
    def getAllUserStories
      @user = User.find_by(email: params[:email])
      return render json: { error: 'not_found' }, status: :not_found if !@user 
      render 'api/stories/getAllUserStories', status: :ok
    end

    def createStory
      @user = User.find_by(email: params[:email])
      @story = @user.stories.create
      return render json: { storyId: @story.id }, status: :ok
    end

    def delete
      @story = Story.find_by(id: params[:storyId])
      return render json: { success: "record deleted successfully" }, status: :ok if @story.destroy
      return render json: { error: "could not delete record" }, status: :bad_request if !@story.destroy
    end

    def getStoryById
      @story = Story.find_by(id: params[:storyId])
      return render json: { error: 'not_found' }, status: :not_found if !@story
      render 'api/stories/getStoryById', status: :ok
    end

    def saveStory
      @user = User.find_by(email: params[:email])
      @story = @user.stories.find_by(id: params[:storyId])
      @story.update(story_params)
      @story.update_insights_and_arguments(params[:story][:insights])
      return render json: { success: "story saved successfully" }, status: :ok
    end

    private 

    def story_params
      params.require(:story).permit(:title, :situation, :complication, :question, :answer, :id)
    end

  end
end

