module Api
    class StoriesController < ApplicationController
        
        def create
            # placeholder for create api call
        end

        def getAllUserStories

            @user = User.find_by(id: params[:userId])
            
            render 'api/stories/getAllUserStories', status: :ok
            
        end

    end
end

