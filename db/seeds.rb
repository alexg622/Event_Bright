# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Event.destroy_all
Tag.destroy_all
Category.destroy_all

alex = User.create(first_name: "Alex", last_name: "Gonzalez", email: "alex@mail.com", password: "password")


event1 = Event.create(title: "Alexs Event", img_url: "http://2.bp.blogspot.com/-m7PDosYY3_c/T318H57Cs1I/AAAAAAAAHlA/4jy4UBdZ1MY/s1600/cute-puppy-dogs-puppies-pictures-91.jpg", start_time: DateTime.now,
end_time: DateTime.now, address: "715 Folsom", city: "San Francisco",
zipcode: "94451", price: 222.25, details: "Fun party", user_id: alex.id)
event2 = Event.create(title: "Alex Event", img_url: "http://2.bp.blogspot.com/-m7PDosYY3_c/T318H57Cs1I/AAAAAAAAHlA/4jy4UBdZ1MY/s1600/cute-puppy-dogs-puppies-pictures-91.jpg", start_time: DateTime.now,
end_time: DateTime.now, address: "715 Folsom", city: "San Francisco",
zipcode: "94451", price: 222.25, details: "Fun party", user_id: alex.id)
event3 = Event.create(title: "Ale Event", img_url: "http://2.bp.blogspot.com/-m7PDosYY3_c/T318H57Cs1I/AAAAAAAAHlA/4jy4UBdZ1MY/s1600/cute-puppy-dogs-puppies-pictures-91.jpg", start_time: DateTime.now,
end_time: DateTime.now, address: "715 Folsom", city: "San Francisco",
zipcode: "94451", price: 222.25, details: "Fun party", user_id: alex.id)
event4 = Event.create(title: "Al Event", img_url: "http://2.bp.blogspot.com/-m7PDosYY3_c/T318H57Cs1I/AAAAAAAAHlA/4jy4UBdZ1MY/s1600/cute-puppy-dogs-puppies-pictures-91.jpg", start_time: DateTime.now,
end_time: DateTime.now, address: "715 Folsom", city: "San Francisco",
zipcode: "94451", price: 222.25, details: "Fun party", user_id: alex.id)
event5 = Event.create(title: "A Event", img_url: "http://2.bp.blogspot.com/-m7PDosYY3_c/T318H57Cs1I/AAAAAAAAHlA/4jy4UBdZ1MY/s1600/cute-puppy-dogs-puppies-pictures-91.jpg", start_time: DateTime.now,
end_time: DateTime.now, address: "715 Folsom", city: "San Francisco",
zipcode: "94451", price: 222.25, details: "Fun party", user_id: alex.id)
event6 = Event.create(title: "Bills Event", img_url: "http://2.bp.blogspot.com/-m7PDosYY3_c/T318H57Cs1I/AAAAAAAAHlA/4jy4UBdZ1MY/s1600/cute-puppy-dogs-puppies-pictures-91.jpg", start_time: DateTime.now,
end_time: DateTime.now, address: "715 Folsom", city: "San Francisco",
zipcode: "94451", price: 222.25, details: "Fun party", user_id: alex.id)
event7 = Event.create(title: "Wills Event", img_url: "http://2.bp.blogspot.com/-m7PDosYY3_c/T318H57Cs1I/AAAAAAAAHlA/4jy4UBdZ1MY/s1600/cute-puppy-dogs-puppies-pictures-91.jpg", start_time: DateTime.now,
end_time: DateTime.now, address: "715 Folsom", city: "San Francisco",
zipcode: "94451", price: 222.25, details: "Fun party", user_id: alex.id)
event8 = Event.create(title: "Cereal Event", img_url: "http://2.bp.blogspot.com/-m7PDosYY3_c/T318H57Cs1I/AAAAAAAAHlA/4jy4UBdZ1MY/s1600/cute-puppy-dogs-puppies-pictures-91.jpg", start_time: DateTime.now,
end_time: DateTime.now, address: "715 Folsom", city: "San Francisco",
zipcode: "94451", price: 222.25, details: "Fun party", user_id: alex.id)
event9 = Event.create(title: "Breakfast Event", img_url: "http://2.bp.blogspot.com/-m7PDosYY3_c/T318H57Cs1I/AAAAAAAAHlA/4jy4UBdZ1MY/s1600/cute-puppy-dogs-puppies-pictures-91.jpg", start_time: DateTime.now,
end_time: DateTime.now, address: "715 Folsom", city: "San Francisco",
zipcode: "94451", price: 222.25, details: "Fun party", user_id: alex.id)

music = Category.create(name: "Music", img_url: "test")
show = Category.create(name: "Show", img_url: "Test2")

tag1 = Tag.create(event_id: event1.id, category_id: music.id)
tag2 = Tag.create(event_id: event1.id, category_id: show.id)

ticket1 = Ticket.create(event_id: event1.id, user_id: alex.id)
ticket2 = Ticket.create(event_id: event2.id, user_id: alex.id)
ticket3 = Ticket.create(event_id: event3.id, user_id: alex.id)
