class FeedbacksController < ApplicationController
  def index
  end

  def create
    if Feedback.create(feedback_params)
      redirect_to feedback_index_path
    else
      redirect_to feedback_index_path
    end
  end

  private
    def feedback_params
      params.require(:feedback).permit(:name, :email, :massage, :phone, :subject)
    end
end
