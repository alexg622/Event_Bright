json.events do
  @events.each do |event|
    json.set! event.id do
      json.extract! event, :id, :title, :img_url, :start_time,
      :end_time, :address, :city, :state, :zipcode, :price, :details,
      :user_id, :category_ids 
    end
  end
end

json.authors do
  @events.each do |event|
    json.set! event.author.id do
      json.extract! event.author, :first_name, :last_name, :email, :id
    end
  end
end
