json.event do
  json.set! @event.id do
    json.extract! @event, :id, :title, :img_url, :start_time,
    :end_time, :address, :city, :zipcode, :price, :details,
    :user_id
  end
end

json.author do
  json.set! @event.author.id do
    json.extract! @event.author, :first_name, :last_name, :email, :id
  end
end
