class Api::EventsController < ApplicationController
  before_action :signed_in?, only: [:create, :new, :update, :destroy]

  def index
    @events = Event.all

    render :index
  end

  def show
    @event = Event.find(params[:id])
    @categories = @event.categories

    render :show
  end

  def new
    @event = Event.new
  end

  def create
    @event = Event.new(event_params)
    @event.author = current_user
    if @event.save
      @tag = Tag.new(event_id: @event.id, category_id: category_params[:category])
      if @tag.save
        @categories = @event.categories
        render :show
      else
        render json: @tag.errors.full_messages, status: 422
      end
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def edit
    @event = current_user.events.find(params[:id])
  end

  def update
    @event = current_user.events.find(params[:id])
    @categories = @event.categories
    if @event.update(event_params)
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @event = current_user.events.find(params[:id])
    @event.destroy

    render json: @event
  end

  private
  def event_params
    params.require(:event).permit(:title, :img_url, :start_time, :end_time, :state, :address, :city, :zipcode, :price, :details)
  end

  def category_params
    params.require(:event).permit(:category)
  end

  def update_params
    params.require(:event).permit(:id, :user_id, :category)
  end
end
