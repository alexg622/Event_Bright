json.event do
  json.set! @event.id do
    json.extract! @event, :id, :title, :img_url, :start_time,
    :end_time, :address, :city, :zipcode, :state, :price, :details,
    :user_id
  end
end

json.author do
  json.set! @event.author.id do
    json.extract! @event.author, :first_name, :last_name, :email, :id
  end
end

json.categories do
  @categories.each do |category|
    json.set! category.id do
      json.extract! category, :name, :img_url, :id
    end
  end
end
