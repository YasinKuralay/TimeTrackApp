## Timeline

I started at 9 am and stopped at arount 17.45pm to start writing the readme. I pushed the readme at 17.55, but it wasn't detailed enough so there will be another push after 18 pm, but only a readme will be pushed.

I spent most of my time on adding a login / register functionality so that several people could use the app. I got several errors so this took longer than expected, but usually everything in programming does, so I am definitely not complaining.

By the time I had to stop for writing a Readme, I had most of the functionality completed, with searching, pagination and booking from the stopWatch left undone. The backend for booking from the stopwatch was already there, for pagination and searching I just had to add 1 query in my db.js, and change 1 query. Including the expected debugging time, I would have completed these within 2-3 hours.

## Database

The app makes use of PostgreSQL. Please create a db called timetrackerapp to use the application, and run the command in timetrackerapp.sql. This creates the initial needed table, all other tables are created as the user registers. There is unfortunately no data dump. The only way to create data is to click on the calendar icon and manually enter the data.

The app makes use of a module called spicedPg for connecting the db to the server, this was the module used in our bootcamp at spiced.

## Running the App

After setting up the database, simply run 'npm run dev'. I used concurrently, so this runs both the front and the backend at the same time. The app should be accessible through 'http://localhost:3000/'

## Functionality

The app makes use of React with Express and PostgreSQL.

There is a login and registration form. Authentication is done with session cookies. The tracker works. Opening the calendar component does not pause the tracker, because the tracker is always present in that route (it disappears because the calendar component has a background with the same background as the app itself. This background has a z index lower than the navbar, but higher than the stopwatch). Input for manual booking works but the UI/UX is practically non-existent. The user has to input in correct format. This can all be fixed easily with more time.

Geting all bookings works, but it is a Select All statement without pagination. Adding this would be easy aswell, the initial 'get bookings' would only return 30 results, and pressing on page 2 or next page would get the next 30, etc.

There is no booking for the timer itself right now, but the db command for adding it is there, all there is needed is to collect the current info of the timer and creating a axios.post request to the corresponding, existing update table route (/customBooking) in the server.

## Errors

I had trouble with proxy errors. The app might be filled with other errors aswell. Chrome seems to be the most stable at this time, with firefox being the most unstable. Namely, logout has to be clicked twice in Google Chrome so that the cookies are flushed correctly, and it doesn't work in firefox at all.

## Consistency

The login and registration forms, aswell as the 'Calendar' component are written in class components because I didn't have the time to rewrite them completely, so I took them from one of my repositories, namely https://github.com/YasinKuralay/TheCharacterForge

The calendar component wasn't of course 'taken' from there, but a part of the logic was imported, and I had to use it as a class component as the logic came from a class component, and I didn't have time to change it.

## Clean Code

I tried to name variables, functions and components for better readability. There were some comments here and there, but I couldn't write the quality of code that I was expecting to write. If allowed , I could rename vars and add comments without adding anything to the code.

## Routing

This might be the most horrible part of the code. The user can bypass the registration/login form if wanted.

# Components

## Stopwatch

Setinterval and settimeout do not work good with state. Thus, I made use of the Date object to keep track of when the user clicked on start/stop.

The format is as intended, and the stopwatch works. However, booking time functionality couldn't be completed, despite that I already had the backend set up for it. The stopwatch can be reset manually.

## Calender

This component is anything but a calender. I had to stop right after I added functionality for getting all bookings, which has absolutely no styling. This was the last piece of code that I added. It makes 2 axios requests, one for posting the manually entered bookings data, and one for getting all the bookings data.

## Navbar

Stopwatch and calendar components should work problemless, the logout button has its problems.

# The Project

I gained a pretty substantial confidence in terms of stress management. Overall I enjoyed the project. It was stressfull, true, but every time I debugged something I immediately regained all the energy needed to go through this 8 hour rollercoaster.
