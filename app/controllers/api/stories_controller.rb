module Api
    class StoriesController < ApplicationController
        
        # TODO add security (check user is logged in and is the owner of stories for example)

        def create
            # placeholder for create api call
        end

        def getAllUserStories

            @user = User.find_by(id: params[:userId])
            return render json: { error: 'not_found' }, status: :not_found if !@user 
            render 'api/stories/getAllUserStories', status: :ok
            
        end

        def getStoryById

            @story = Story.find_by(id: params[:storyId])
            return render json: { error: 'not_found' }, status: :not_found if !@story
            render 'api/stories/getStoryById', status: :ok

        end

    end
end

