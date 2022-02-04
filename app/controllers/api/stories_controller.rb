module Api
    require('json')

    class StoriesController < ApplicationController
        
        # TODO add security (check user is logged in and is the owner of stories for example)

        def create
            # TODO placeholder for create api call
        end

        def getAllUserStories

            @user = User.find_by(id: params[:userId])
            return render json: { error: 'not_found' }, status: :not_found if !@user 
            render 'api/stories/getAllUserStories', status: :ok
            
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

            # TODO user ID needs to be fetched from session data
            @user = User.find_by(id: 1)
            @story = Story.find_by(id: params[:storyId])
            data_insights = params[:insights]

            @story.situation = params[:situation]
            @story.complication = params[:complication]
            @story.question = params[:question]
            @story.answer = params[:answer]
            @story.save!

            @story.insights.each do |insight_record|
                updated_insight = data_insights.find { |value| value[:insightId] == insight_record.id }
                insight_record.insight = updated_insight[:insight] 
                insight_record.save!

                insight_record.arguments.each do |argument|
                    matching_updated_argument = updated_insight[:arguments].find { |data| data[:argumentId] == argument.id }
                    argument.argument = matching_updated_argument[:argument]
                    argument.explanation = matching_updated_argument[:explanation]
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

