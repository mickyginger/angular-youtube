# angular-youtube
Simple app to demonstrate calling the youtube api from an angular app

## Initializing the Google Client Api
The client api requires a callback parameter which calls a function in `app.js`, which in turn calls a function in the `MainController` which loads the `youtube` api and does a bit of housekeeping.

## Youtube API service
A simple wrapper for the youtube search function, using `$q` to wrap the call in a promise.

## $scope.$apply vs $timeout vs $scope.$evalAsync
When using external APIs, Angular is unaware when properties on the controller have been updated. `$scope.$apply` forces Angular to update its view, however, I was getting an error `$digest already in progress.`, so I changed the call to a `$timeout([function], 0)`.

After reading this article: [AngularJS: $apply vs $timeout vs $digest vs $evalAsync](http://www.codingeek.com/angularjs/angular-js-apply-timeout-digest-evalasync/) I changed it to `$scope.$evalAsync()`.

I'm still not 100% on what's happening here, and welcome any input.