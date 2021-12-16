module Api
    class StoriesController < ApplicationController
        
        def create
            # placeholder for create api call
        end

        def getAllStories
            @stories = Story.find(1)
            
            render 'api/stories/getAllStories', status: :ok
            
        end

    end
end

