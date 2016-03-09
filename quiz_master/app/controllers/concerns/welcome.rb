

  def image
    current_user.assign_attributes(image_param)
    if current_user.save
      render json: current_user
    else
      render json: current_user.errors.messages
    end
  end
end