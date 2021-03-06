json.category do
  json.set! @category.id do
    json.extract! @category, :id, :name, :img_url
  end
end

json.events do
  @events.each do |event|
    json.set! event.id do
      json.extract! event, :id, :state, :title, :img_url, :start_time,
      :end_time, :address, :city, :zipcode, :price, :details, :state,
      :user_id
    end
  end
end
