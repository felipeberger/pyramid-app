module Api
    require('json')

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

        def saveStory

            # TODO user ID needs to be fetched from session data
            @user = User.find_by(id: 1)
            @story = Story.find_by(id: params[:storyId])
            # to_unsafe_h is needed to used .find  
            data_insights = params[:insights].to_unsafe_h

            @story.situation = params[:situation]
            @story.complication = params[:complication]
            @story.question = params[:question]
            @story.answer = params[:answer]
            @story.save!

            @story.insights.each do |insight_record|
                updated_insight = data_insights.find { |key, value| value[:insightId] == insight_record.id }
                # .find returns an array [key, {value}] so [1] is needed to access the value hash
                insight_record.insight = updated_insight[1][:insight] 
                insight_record.save!

                insight_record.arguments.each do |argument|
                    matching_updated_argument = updated_insight[1][:arguments].find { |data| data[:id] == argument.id }
                    argument.argument = matching_updated_argument[:argument]
                    argument.save!
                end
            end

            return render json: { success: "story saved successfully" }, status: :ok
        end

        private

            def story_params
                params.require(:story).permit(:situation, :complication, :question, :answer)
            end

            def insight_params
                params.require(:insight).permit(:insight)
            end

            def argument_params
                params.require(:argument).permit(:argument, :explanation, :data)
            end

    end
end

