## Functionality

The app makes use of React with Express and PostgreSQL.

There is a login and registration form. Authentication is done with session cookies. The tracker works. Opening the calendar component does not pause the tracker, because the tracker is always present in that route (it disappears because the calendar component has a background with the same background as the app itself). Input for manual booking works but the UI/UX is practically non-existent. The user has to input in correct format. This can all be fixed easily with more time.

Geting all bookings works, but it is a SELECT \* statement without pagination. Adding this would be easy aswell, the initial 'get bookings' would only return 30 results, and pressing on page 2 or next page would get the next 30, etc.

There is no booking for the timer itself right now, but the db command for adding it is there, all there is needed is to collect the current info of the timer and creating a axios.post request to the corresponding, existing updateTable route in the server.

## Database

The app makes use of PostgreSQL. Please create a db called timetrackerapp to use the application, and run the command in timetrackerapp.sql. This creates the initial needed table, all other tables are created as the user registers.

The app makes use of a module called spicedPg for connecting the db to the server, this was the module used in our bootcamp at spiced.

## Errors

I had trouble with proxy errors. The app might be filled with other errors aswell. Chrome seems to be the most stable at this time, with firefox being the most unstable.

### The Rest

The rest of the documentation is going to be added after this commit.
