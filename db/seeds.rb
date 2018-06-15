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
zipcode: "94451", price: 222.25, details: "Music and Fireworks. This is the best event that you will ever go to so buy as many tickets as you can before the event gets sold out. It will be an amazing event with amazing event music, an food, and drinks", user_id: alex.id)

event2 = Event.create(state: "CA", title: "Party in the Sky", img_url: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ccfcc13bfcdfca6f54a8e043ffbe075&auto=format&fit=crop&w=1050&q=80", start_time: DateTime.now,
end_time: DateTime.now, address: "835 skylane", city: "San Francisco",
zipcode: "94671", price: 300, details: "A day of fun in the sky with food, drinks, and music. This is the best event that you will ever go to so buy as many tickets as you can before the event gets sold out. It will be an amazing event with amazing event music, an food, and drinks", user_id: alex.id)

event3 = Event.create(state: "CA", title: "Concert of Colors", img_url: "https://images.unsplash.com/photo-1468234847176-28606331216a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c82acc6a6472b4bfb4e5e4aa021f595e&auto=format&fit=crop&w=1615&q=80", start_time: DateTime.now,
end_time: DateTime.now, address: "8989 anthem park", city: "New York",
zipcode: "85451", price: 125, details: "Enjoy live music, great bands, nad spray colors. This is the best event that you will ever go to so buy as many tickets as you can before the event gets sold out. It will be an amazing event with amazing event music, an food, and drinks", user_id: alex.id)

event4 = Event.create(state: "CA", title: "Competitive Horse Back Riding", img_url: "https://images.unsplash.com/photo-1526039003500-f2f1cd73570e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b80dfb6bd81dd2952f11d1a51826ef7&auto=format&fit=crop&w=1029&q=80", start_time: DateTime.now,
end_time: DateTime.now, address: "5667 San Pedro Way", city: "Oregon",
zipcode: "94451", price: 95, details: "Learn to horses competitively through a series of obstacle events. This is the best event that you will ever go to so buy as many tickets as you can before the event gets sold out. It will be an amazing event with amazing event music, an food, and drinks", user_id: alex.id)

event5 = Event.create(state: "CA", title: "Concert in the Night", img_url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fb2264421ec008a297430e9e25f94eb3&auto=format&fit=crop&w=1500&q=80", start_time: DateTime.now,
end_time: DateTime.now, address: "587 Lombard Way", city: "San Francisco",
zipcode: "94451", price: 150, details: "Go to a night concert with great music, food, and drinks. This is the best event that you will ever go to so buy as many tickets as you can before the event gets sold out. It will be an amazing event with amazing event music, an food, and drinks", user_id: alex.id)

event6 = Event.create(state: "CA", title: "Concert of Lights", img_url: "https://images.unsplash.com/photo-1464986411762-a4275fbaf3f0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=891934d8ecd2f94fd6ca17a8292202d6&auto=format&fit=crop&w=1051&q=80", start_time: DateTime.now,
end_time: DateTime.now, address: "2343 Brighten City Road", city: "San Francisco",
zipcode: "94451", price: 65, details: "Go to a concert full of lights, great music, people, and food. This is the best event that you will ever go to so buy as many tickets as you can before the event gets sold out. It will be an amazing event with amazing event music, an food, and drinks", user_id: alex.id)

event7 = Event.create(state: "CA", title: "Art Gallery", img_url: "https://images.unsplash.com/photo-1508997449629-303059a039c0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af90f024facc8921c9bf854da77f222a&auto=format&fit=crop&w=1050&q=80", start_time: DateTime.now,
end_time: DateTime.now, address: "715 Gallery Hall", city: "San Francisco",
zipcode: "94451", price: 225, details: "Go to a day of art at gallery hall. This is the best event that you will ever go to so buy as many tickets as you can before the event gets sold out. It will be an amazing event with amazing event music, an food, and drinks", user_id: alex.id)

event8 = Event.create(state: "CA", title: "A day of Baseball", img_url: "https://images.unsplash.com/photo-1498846323785-c40aafaaa4f8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=80dde2570fbc4df560ba502bb5d35607&auto=format&fit=crop&w=658&q=80", start_time: DateTime.now,
end_time: DateTime.now, address: "3rd street", city: "San Francisco",
zipcode: "94451", price: 50, details: "Watch a baseball game in a beautiful stadium with food, drinks, and music. This is the best event that you will ever go to so buy as many tickets as you can before the event gets sold out. It will be an amazing event with amazing event music, an food, and drinks", user_id: alex.id)

event9 = Event.create(state: "CA", title: "Lake Lounge", img_url: "https://images.unsplash.com/photo-1470753937643-efeb931202a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=605dda29d7945345968d2dfb3eeb672e&auto=format&fit=crop&w=1050&q=80", start_time: DateTime.now,
end_time: DateTime.now, address: "9847 Russian River Drive", city: "San Francisco",
zipcode: "94451", price: 25, details: "Enjoy a relaxing day by the lake with great music, food and drinks. This is the best event that you will ever go to so buy as many tickets as you can before the event gets sold out. It will be an amazing event with amazing event music, an food, and drinks", user_id: alex.id)

event10 = Event.create(state: "CA", title: "Rave Night", img_url: "https://images.unsplash.com/photo-1518890569493-668df9a00266?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6fddf752918d86ad929b90102c2d1ff5&auto=format&fit=crop&w=967&q=80", start_time: DateTime.now,
end_time: DateTime.now, address: "7584 Club street", city: "San Francisco",
zipcode: "94451", price: 325, details: "Take a night off to enjoy music, lights, and drinks. This is the best event that you will ever go to so buy as many tickets as you can before the event gets sold out. It will be an amazing event with amazing event music, an food, and drinks", user_id: alex.id)

event11 = Event.create(state: "CA", title: "Carnival Night", img_url: "https://images.unsplash.com/photo-1505714628981-7273be3e2bd7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=28c38074b63bc912283b769ccdbc55f5&auto=format&fit=crop&w=1500&q=80", start_time: DateTime.now,
end_time: DateTime.now, address: "12 Carnival Drive", city: "San Francisco",
zipcode: "94451", price: 85, details: "Spend a night at the carnival to enjoy great music, food, drinks, rides, and games. This is the best event that you will ever go to so buy as many tickets as you can before the event gets sold out. It will be an amazing event with amazing event music, an food, and drinks", user_id: alex.id)

event12 = Event.create(state: "CA", title: "Rave Morning", img_url: "https://images.unsplash.com/photo-1504680177321-2e6a879aac86?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a8111c411923b7c9dbfc11d87f5d9c48&auto=format&fit=crop&w=1500&q=80", start_time: DateTime.now,
end_time: DateTime.now, address: "44 Breakfast Way", city: "San Francisco",
zipcode: "94451", price: 115, details: "End your night and Start your morning with the best hidden rave in the city. This is the best event that you will ever go to so buy as many tickets as you can before the event gets sold out. It will be an amazing event with amazing event music, an food, and drinks", user_id: alex.id)

event13 = Event.create(state: "CA", title: "Pete's Bday Bash", img_url: "https://images.unsplash.com/photo-1472698938026-79bed881e5b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6d7b7592c1d975088a9e7708ab4fe4d7&auto=format&fit=crop&w=1050&q=80", start_time: DateTime.now,
end_time: DateTime.now, address: "7544 Funston Drive", city: "San Francisco",
zipcode: "94451", price: 85, details: "Come celebrate Pete's birthday at the best day party in the city. This is the best event that you will ever go to so buy as many tickets as you can before the event gets sold out. It will be an amazing event with amazing event music, an food, and drinks", user_id: alex.id)

event14 = Event.create(state: "CA", title: "Stop Thinking Start Drinking", img_url: "https://images.unsplash.com/photo-1507286722556-2d4b0704eeb3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=370e9f5deeab128d01264bf3c5a49f6c&auto=format&fit=crop&w=676&q=80", start_time: DateTime.now,
end_time: DateTime.now, address: "748 Candle Lane", city: "San Francisco",
zipcode: "94451", price: 250, details: "Have some of the best drinks in the city as you enjoy great music and food. This is the best event that you will ever go to so buy as many tickets as you can before the event gets sold out. It will be an amazing event with amazing event music, an food, and drinks", user_id: alex.id)

event15 = Event.create(state: "CA", title: "Best Concert", img_url: "https://images.unsplash.com/photo-1466150036782-869a824aeb25?ixlib=rb-0.3.5&s=db9e7fec550a8453779cd9b8d93f6087&auto=format&fit=crop&w=1050&q=80", start_time: DateTime.now,
end_time: DateTime.now, address: "88 Speed Lane Park", city: "San Francisco",
zipcode: "94451", price: 275, details: "Best concert of the year. This is the best event that you will ever go to so buy as many tickets as you can before the event gets sold out. It will be an amazing event with amazing event music, an food, and drinks", user_id: alex.id)

music = Category.create(name: "Music", img_url: "https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e2c94316574bfeebd2f521acf160a35f&auto=format&fit=crop&w=634&q=80")
show = Category.create(name: "Show", img_url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fb2264421ec008a297430e9e25f94eb3&auto=format&fit=crop&w=1500&q=80")
explore = Category.create(name: "explore", img_url: "https://images.unsplash.com/photo-1520121270103-9b3adf3066e9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=16deb96f08565696cbf31204292d1082&auto=format&fit=crop&w=700&q=80")
food = Category.create(name: "Food", img_url: "https://images.unsplash.com/photo-1505253468034-514d2507d914?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=140e2054487a8f6f092fd6cda183cfac&auto=format&fit=crop&w=634&q=80")
club = Category.create(name: "Club", img_url: "https://images.unsplash.com/photo-1485889397316-8393dd065127?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5a21d4bcefdc4d6b83a9a13c9452328&auto=format&fit=crop&w=1190&q=80")
bars = Category.create(name: "Bars", img_url: "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b021b2cbe86640f8b50c8b24bc03b576&auto=format&fit=crop&w=634&q=80")
movies = Category.create(name: "Movies", img_url: "https://images.unsplash.com/photo-1510511450816-30c68106b199?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=95c56fcf47f4a9e8613adf8a0f080966&auto=format&fit=crop&w=1050&q=80")

tag1 = Tag.create(event_id: event1.id, category_id: music.id)
tag2 = Tag.create(event_id: event1.id, category_id: show.id)
tag2 = Tag.create(event_id: event1.id, category_id: explore.id)
tag3 = Tag.create(event_id: event2.id, category_id: explore.id)
tag4 = Tag.create(event_id: event2.id, category_id: food.id)
tag5 = Tag.create(event_id: event3.id, category_id: club.id)
tag5 = Tag.create(event_id: event3.id, category_id: bars.id)
tag6 = Tag.create(event_id: event3.id, category_id: bars.id)
tag7 = Tag.create(event_id: event4.id, category_id: movies.id)
tag8 = Tag.create(event_id: event4.id, category_id: music.id)
tag9 = Tag.create(event_id: event5.id, category_id: show.id)
tag10 = Tag.create(event_id: event5.id, category_id: explore.id)
tag10 = Tag.create(event_id: event5.id, category_id: music.id)
tag11 = Tag.create(event_id: event6.id, category_id: food.id)
tag12 = Tag.create(event_id: event6.id, category_id: club.id)
tag13 = Tag.create(event_id: event7.id, category_id: bars.id)
tag14 = Tag.create(event_id: event7.id, category_id: movies.id)
tag15 = Tag.create(event_id: event8.id, category_id: music.id)
tag16 = Tag.create(event_id: event8.id, category_id: show.id)
tag17 = Tag.create(event_id: event9.id, category_id: explore.id)
tag18 = Tag.create(event_id: event9.id, category_id: food.id)
tag19 = Tag.create(event_id: event10.id, category_id: club.id)
tag20 = Tag.create(event_id: event10.id, category_id: bars.id)
tag21 = Tag.create(event_id: event11.id, category_id: movies.id)
tag22 = Tag.create(event_id: event11.id, category_id: show.id)
tag23 = Tag.create(event_id: event12.id, category_id: music.id)
tag24 = Tag.create(event_id: event12.id, category_id: explore.id)
tag25 = Tag.create(event_id: event13.id, category_id: food.id)
tag26 = Tag.create(event_id: event13.id, category_id: bars.id)
tag27 = Tag.create(event_id: event14.id, category_id: movies.id)
tag28 = Tag.create(event_id: event14.id, category_id: show.id)
tag29 = Tag.create(event_id: event15.id, category_id: music.id)
tag30 = Tag.create(event_id: event15.id, category_id: explore.id)
tag30 = Tag.create(event_id: event15.id, category_id: show.id)

ticket1 = Ticket.create(event_id: event1.id, user_id: alex.id, quantity: 5)
ticket2 = Ticket.create(event_id: event2.id, user_id: alex.id, quantity: 5)
ticket3 = Ticket.create(event_id: event3.id, user_id: alex.id, quantity: 5)
