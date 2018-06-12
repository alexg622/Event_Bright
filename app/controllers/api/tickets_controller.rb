class Api::TicketsController < ApplicationController


  def create
    @ticket = Ticket.new(user_id: current_user.id, event_id: params[:id])
    if @ticket.save
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end
end
