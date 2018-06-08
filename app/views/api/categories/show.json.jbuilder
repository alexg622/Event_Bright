json.category do
  json.set! @category.id do
    json.extract! @category, :id, :name, :img_url
  end
end

json.events do
  @category.events.each do |event|
    json.set! event.id do
      json.extract! event, :id, :title, :img_url, :start_time,
      :end_time, :address, :city, :zipcode, :price, :details,
      :user_id
    end
  end
end
