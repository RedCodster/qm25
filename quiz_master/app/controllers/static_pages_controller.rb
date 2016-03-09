class StaticPagesController < ApplicationController
  def index
  end

  def image
    current_user.assign_attributes(image_param)
    if current_user.save
      render json: current_user
    else
      render json: current_user.errors.messages
    end
  end

  def signup

  end

  def signin
  end

private
  def image_param
    params.require(:user).permit(:image)
  end
end
