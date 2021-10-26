# Red Badge Final Project (Client)

This is a web app that uses the tastedive.com api to fetch 5 movies that are similar to a movie that you enter in the search box. 
Once you search a movie, you can do three things:
- Click the star to add it to a watch later list. 
- Click the thumbs up to add to a movie notes list tagged as a movie that you like.
- Click the thumbs down to add it to a movie notes list tagged as a movie that you dislike.

After you have movies in the watch later list you can delete them one by one.

After you have movies in the movie notes list you can:
- Delete them individually
- Edit your notes 

The server is [here](https://github.com/bsnyder13/red-server), the server will need to be started prior to the client.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

After you start the server and client, you will need to open a tab in your browser and navigate to https://cors-anywhere.herokuapp.com/corsdemo and click the button to request temporary access to their demo server. This is due to a CORS issue with the tastedive api.

This will allow the movie fetch to work.
