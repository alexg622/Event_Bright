json.categories do
  @categories.each do |category|
    json.set! category.id do
      json.extract! category, :id, :name, :img_url
    end
  end
end

# json.events do
#   @categories.events.each do |event|
#     json.set! event.id do
#       json.extract! event, id, :title, :img_url, :start_time,
#       :end_time, :address, :city, :zipcode, :price, :details,
#       :user_id
#     end
#   end
# end
