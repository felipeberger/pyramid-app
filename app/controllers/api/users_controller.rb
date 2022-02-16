module Api
  require('json')

  class UsersController < ApplicationController

    def create
      if (User.exists?(email: params[:user][:email])) 
          return render json: { error: "user already exists" }, status: :ok
      end

      @new_user = User.new(user_params)
      @new_user.save!
      return render json: { success: "new user created" }, status: :ok
    end

    private 

    def user_params
      params.require(:user).permit(:email)
    end

  end
end

