# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
alex = User.create(first_name: "Alex", last_name: "Gonzalez", email: "alex@mail.com", password: "password")

Event.destroy_all

Event.create(title: "Alexs Event", img_url: "http://2.bp.blogspot.com/-m7PDosYY3_c/T318H57Cs1I/AAAAAAAAHlA/4jy4UBdZ1MY/s1600/cute-puppy-dogs-puppies-pictures-91.jpg", start_time: DateTime.now,
end_time: DateTime.now, address: "715 Folsom", city: "San Francisco",
zipcode: "94451", price: 222.25, details: "Fun party", user_id: alex.id)
Event.create(title: "Alex Event", img_url: "http://2.bp.blogspot.com/-m7PDosYY3_c/T318H57Cs1I/AAAAAAAAHlA/4jy4UBdZ1MY/s1600/cute-puppy-dogs-puppies-pictures-91.jpg", start_time: DateTime.now,
end_time: DateTime.now, address: "715 Folsom", city: "San Francisco",
zipcode: "94451", price: 222.25, details: "Fun party", user_id: alex.id)
Event.create(title: "Ale Event", img_url: "http://2.bp.blogspot.com/-m7PDosYY3_c/T318H57Cs1I/AAAAAAAAHlA/4jy4UBdZ1MY/s1600/cute-puppy-dogs-puppies-pictures-91.jpg", start_time: DateTime.now,
end_time: DateTime.now, address: "715 Folsom", city: "San Francisco",
zipcode: "94451", price: 222.25, details: "Fun party", user_id: alex.id)
Event.create(title: "Al Event", img_url: "http://2.bp.blogspot.com/-m7PDosYY3_c/T318H57Cs1I/AAAAAAAAHlA/4jy4UBdZ1MY/s1600/cute-puppy-dogs-puppies-pictures-91.jpg", start_time: DateTime.now,
end_time: DateTime.now, address: "715 Folsom", city: "San Francisco",
zipcode: "94451", price: 222.25, details: "Fun party", user_id: alex.id)
Event.create(title: "A Event", img_url: "http://2.bp.blogspot.com/-m7PDosYY3_c/T318H57Cs1I/AAAAAAAAHlA/4jy4UBdZ1MY/s1600/cute-puppy-dogs-puppies-pictures-91.jpg", start_time: DateTime.now,
end_time: DateTime.now, address: "715 Folsom", city: "San Francisco",
zipcode: "94451", price: 222.25, details: "Fun party", user_id: alex.id)
Event.create(title: "Bills Event", img_url: "http://2.bp.blogspot.com/-m7PDosYY3_c/T318H57Cs1I/AAAAAAAAHlA/4jy4UBdZ1MY/s1600/cute-puppy-dogs-puppies-pictures-91.jpg", start_time: DateTime.now,
end_time: DateTime.now, address: "715 Folsom", city: "San Francisco",
zipcode: "94451", price: 222.25, details: "Fun party", user_id: alex.id)
Event.create(title: "Wills Event", img_url: "http://2.bp.blogspot.com/-m7PDosYY3_c/T318H57Cs1I/AAAAAAAAHlA/4jy4UBdZ1MY/s1600/cute-puppy-dogs-puppies-pictures-91.jpg", start_time: DateTime.now,
end_time: DateTime.now, address: "715 Folsom", city: "San Francisco",
zipcode: "94451", price: 222.25, details: "Fun party", user_id: alex.id)
