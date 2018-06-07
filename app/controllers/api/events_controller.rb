class Api::EventsController < ApplicationController
  before_action :signed_in?, only: [:create, :update, :destroy]

  def index
    @events = Event.all

    render :index
  end

  def show
    @event = Event.find(params[:id])
  end

  def new
    @event = Event.new
  end

  def create
    @event = Event.new(event_params)
    @event.author = current_user
    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def edit
    @event = current_user.events.find(params[:id])
  end

  def update
    @event = current_user.events.find(params[:id])
    if @event.update(event_params)
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @event = current_user.events.find(params[:id])
    @event.destroy
  end

  private
  def event_params
    params.require(:event).permit(:title, :img_url, :start_time, :end_time, :address, :city, :zipcode, :price, :details)
  end
end
