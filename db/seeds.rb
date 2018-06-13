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
demoUser = User.create(first_name: "demoUser", last_name: "demoUser", email: "demoUser@demo.com", password: "demoUser")

event1 = Event.create(state: "CA", title: "Fireworks At a Concert", img_url: "https://images.unsplash.com/photo-1505842465776-3b4953ca4f44?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9389a98991d821a1ad3fd297c2a8df36&auto=format&fit=crop&w=500&q=60", start_time: DateTime.now,
end_time: DateTime.now, address: "715 Folsom", city: "San Francisco",
zipcode: "94451", price: 222.25, details: "Music and Fireworks", user_id: alex.id)

event2 = Event.create(state: "CA", title: "Party in the Sky", img_url: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ccfcc13bfcdfca6f54a8e043ffbe075&auto=format&fit=crop&w=1050&q=80", start_time: DateTime.now,
end_time: DateTime.now, address: "835 skylane", city: "San Francisco",
zipcode: "94671", price: 300, details: "A day of fun in the sky with food, drinks, and music", user_id: alex.id)

event3 = Event.create(state: "CA", title: "Concert of Colors", img_url: "https://images.unsplash.com/photo-1468234847176-28606331216a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c82acc6a6472b4bfb4e5e4aa021f595e&auto=format&fit=crop&w=1615&q=80", start_time: DateTime.now,
end_time: DateTime.now, address: "8989 anthem park", city: "New York",
zipcode: "85451", price: 125, details: "Enjoy live music, great bands, nad spray colors", user_id: alex.id)

event4 = Event.create(state: "CA", title: "Competitive Horse Back Riding", img_url: "https://images.unsplash.com/photo-1526039003500-f2f1cd73570e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b80dfb6bd81dd2952f11d1a51826ef7&auto=format&fit=crop&w=1029&q=80", start_time: DateTime.now,
end_time: DateTime.now, address: "5667 San Pedro Way", city: "Oregon",
zipcode: "94451", price: 95, details: "Learn to horses competitively through a series of obstacle events", user_id: alex.id)

event5 = Event.create(state: "CA", title: "Concert in the Night", img_url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fb2264421ec008a297430e9e25f94eb3&auto=format&fit=crop&w=1500&q=80", start_time: DateTime.now,
end_time: DateTime.now, address: "587 Lombard Way", city: "San Francisco",
zipcode: "94451", price: 150, details: "Go to a night concert with great music, food, and drinks", user_id: alex.id)

event6 = Event.create(state: "CA", title: "Concert of Lights", img_url: "https://images.unsplash.com/photo-1464986411762-a4275fbaf3f0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=891934d8ecd2f94fd6ca17a8292202d6&auto=format&fit=crop&w=1051&q=80", start_time: DateTime.now,
end_time: DateTime.now, address: "2343 Brighten City Road", city: "San Francisco",
zipcode: "94451", price: 65, details: "Go to a concert full of lights, great music, people, and food", user_id: alex.id)

event7 = Event.create(state: "CA", title: "Art Gallary", img_url: "https://images.unsplash.com/photo-1508997449629-303059a039c0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af90f024facc8921c9bf854da77f222a&auto=format&fit=crop&w=1050&q=80", start_time: DateTime.now,
end_time: DateTime.now, address: "715 Gallary Hall", city: "San Francisco",
zipcode: "94451", price: 225, details: "Go to a day of art at gallary hall", user_id: alex.id)

event8 = Event.create(state: "CA", title: "A day of Baseball", img_url: "https://images.unsplash.com/photo-1498846323785-c40aafaaa4f8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=80dde2570fbc4df560ba502bb5d35607&auto=format&fit=crop&w=658&q=80", start_time: DateTime.now,
end_time: DateTime.now, address: "3rd street", city: "San Francisco",
zipcode: "94451", price: 50, details: "Watch a baseball game in a beautiful stadium with food, drinks, and music", user_id: alex.id)

event9 = Event.create(state: "CA", title: "Lake Lounge", img_url: "https://images.unsplash.com/photo-1470753937643-efeb931202a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=605dda29d7945345968d2dfb3eeb672e&auto=format&fit=crop&w=1050&q=80", start_time: DateTime.now,
end_time: DateTime.now, address: "9847 Russian River Drive", city: "San Francisco",
zipcode: "94451", price: 25, details: "Enjoy a relaxing day by the lake with great music, food and drinks", user_id: alex.id)

event10 = Event.create(state: "CA", title: "Rave Night", img_url: "https://images.unsplash.com/photo-1518890569493-668df9a00266?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6fddf752918d86ad929b90102c2d1ff5&auto=format&fit=crop&w=967&q=80", start_time: DateTime.now,
end_time: DateTime.now, address: "7584 Club street", city: "San Francisco",
zipcode: "94451", price: 325, details: "Take a night off to enjoy music, lights, and drinks", user_id: alex.id)

event11 = Event.create(state: "CA", title: "Carnival Night", img_url: "https://images.unsplash.com/photo-1505714628981-7273be3e2bd7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=28c38074b63bc912283b769ccdbc55f5&auto=format&fit=crop&w=1500&q=80", start_time: DateTime.now,
end_time: DateTime.now, address: "12 Carnival Drive", city: "San Francisco",
zipcode: "94451", price: 85, details: "Spend a night at the carnival to enjoy great music, food, drinks, rides, and games", user_id: alex.id)

event12 = Event.create(state: "CA", title: "Rave Morning", img_url: "https://images.unsplash.com/photo-1504680177321-2e6a879aac86?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a8111c411923b7c9dbfc11d87f5d9c48&auto=format&fit=crop&w=1500&q=80", start_time: DateTime.now,
end_time: DateTime.now, address: "44 Breakfast Way", city: "San Francisco",
zipcode: "94451", price: 115, details: "End your night and Start your morning with the best hidden rave in the city", user_id: alex.id)

event13 = Event.create(state: "CA", title: "Pete's Bday Bash", img_url: "https://images.unsplash.com/photo-1472698938026-79bed881e5b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6d7b7592c1d975088a9e7708ab4fe4d7&auto=format&fit=crop&w=1050&q=80", start_time: DateTime.now,
end_time: DateTime.now, address: "7544 Funston Drive", city: "San Francisco",
zipcode: "94451", price: 85, details: "Come celebrate Pete's birthday at the best day party in the city", user_id: alex.id)

event14 = Event.create(state: "CA", title: "Stop Thinking Start Drinking", img_url: "https://images.unsplash.com/photo-1507286722556-2d4b0704eeb3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=370e9f5deeab128d01264bf3c5a49f6c&auto=format&fit=crop&w=676&q=80", start_time: DateTime.now,
end_time: DateTime.now, address: "748 Candle Lane", city: "San Francisco",
zipcode: "94451", price: 250, details: "Have some of the best drinks in the city as you enjoy great music and food", user_id: alex.id)

event15 = Event.create(state: "CA", title: "Best Concert", img_url: "https://images.unsplash.com/photo-1466150036782-869a824aeb25?ixlib=rb-0.3.5&s=db9e7fec550a8453779cd9b8d93f6087&auto=format&fit=crop&w=1050&q=80", start_time: DateTime.now,
end_time: DateTime.now, address: "88 Speed Lane Park", city: "San Francisco",
zipcode: "94451", price: 275, details: "Best concert of the year", user_id: alex.id)

music = Category.create(name: "Music", img_url: "test")
show = Category.create(name: "Show", img_url: "Test2")

tag1 = Tag.create(event_id: event1.id, category_id: music.id)
tag2 = Tag.create(event_id: event1.id, category_id: show.id)

ticket1 = Ticket.create(event_id: event1.id, user_id: alex.id, quantity: 5)
ticket2 = Ticket.create(event_id: event2.id, user_id: alex.id, quantity: 5)
ticket3 = Ticket.create(event_id: event3.id, user_id: alex.id, quantity: 5)
