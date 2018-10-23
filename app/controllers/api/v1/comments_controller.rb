class Api::V1::CommentsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    comment = Comment.new(comment_params)
    comment.user = current_user
    comment.review_id = params[:review_id]

    if comment.save
      render json: comment
    else
      render json: { errors: comment.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private
    def comment_params
      params.require(:comment).permit(:body)
    end
end
