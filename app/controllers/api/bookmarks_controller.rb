class Api::BookmarksController < ApplicationController

  def create
    @bookmark = Bookmark.new(bookmark_params)
    if @bookmark.save
      render 'api/users/show'
    else
      render json: @bookmark.errors.full_messages
    end
  end

  def destroy
    @bookmark = current_user.bookmarks.find(params[:id])
    @bookmark.destroy
    render json: @bookmark
  end

  private
  def bookmark_params
    params.require(:bookmark).permit(:id, :user_id, :event_id)
  end 
end
