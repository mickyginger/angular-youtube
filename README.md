# angular-youtube
Simple app to demonstrate integrating the [YouTube Data API](https://developers.google.com/youtube/v3/) into an Angular app.

## Initializing the Google Client API
The client api requires a callback parameter which calls a function in `app.js`, which in turn calls a function in the `MainController` which loads the `youtube` api and does a bit of housekeeping.

This seems to be Google preferred method: [AngularJS + Cloud Endpoints -- A Recipe for Building Modern Web Applications](https://cloud.google.com/solutions/angularjs-cloud-endpoints-recipe-for-building-modern-web-applications)

## Youtube API service
A simple wrapper for the youtube search function, using `$q` to wrap the call in a promise.

## $scope.$apply vs $timeout vs $scope.$evalAsync
When using external APIs, Angular is unaware when properties on the controller have been updated. `$scope.$apply` forces Angular to update its view, however, I was getting an error `$digest already in progress`, so I changed the call to a `$timeout([function], 0)`.

After reading this article: [AngularJS: $apply vs $timeout vs $digest vs $evalAsync](http://www.codingeek.com/angularjs/angular-js-apply-timeout-digest-evalasync/) I changed it to `$scope.$evalAsync()`, which seems a more appropriate method.

Still not 100% sure what the best approach is for this, so welcome any input.