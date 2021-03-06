json.set! @user.id do
  json.extract! @user, :first_name, :last_name, :email, :id
end

if @event_tickets
  json.event_tickets do
    @event_tickets.each do |event_ticket|
      json.set! event_ticket.id do
        json.extract! event_ticket, :id, :state, :title, :img_url, :start_time,
        :end_time, :address, :city, :zipcode, :price, :details,
        :user_id
      end
    end
  end
end
#
# if @user.bookmarks.empty?
#   json.bookmarks do
#     @user.bookmarks.each do |bookmark|
#       json.set! bookmark.id do
#         json.extract! bookmark, :id, :user_id, :event_id
#       end
#     end
#   end
# end
