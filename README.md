# angular-youtube
Simple app to demonstrate calling the youtube api from an angular app

## Initializing the Google Client Api
The client api requires a callback parameter which calls a function in `app.js`, which in turn calls a function in the `MainController` which loads the `youtube` api and does a bit of housekeeping.

## Youtube API service
A simple wrapper for the youtube search function, using `$q` to wrap the call in a promise.
