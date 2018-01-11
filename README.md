## Crypcoinfolio Web Project

For the frontend, I am using React to create the pages.  To get that working, you need NodeJs and NPM
Open a command prompt and cd into the frontend folder and run `npm install` to download dependencies
This project uses sass to style the pages and you must run `npm run watch-css` in a separate command window to modify the .scss files
One more thing you can do is to open up the project up as a desktop app since the application is using electron.  Simply run `electron ./src/main.js`

The backend is using Express.js and I currently have a mySQL database setup for it.


# To Do:

**First** I want to create a way for a user to input a goal, and then set a date for when the want to complete it
**Second** Figure out a way to load a user with their goals in a database
**Third** Currently configured the backend with expressjs and currently have a mySQL database hooked up with it.  I want to be able to store my cryptocurrency data on the data by hooking up the frontend with the backend
