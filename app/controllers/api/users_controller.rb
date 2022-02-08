module Api
    require('json')

    class UsersController < ApplicationController

        def create
            if (User.exists?(email: params[:email])) 
                return render json: { error: "user already exists" }, status: :ok
            end

            @new_user = User.new(email: params[:email])
            @new_user.save!
            return render json: { success: "new user created" }, status: :ok
        end

        private 

        def user_params
            params.require(:user).permit(:email)
        end

    end
end

