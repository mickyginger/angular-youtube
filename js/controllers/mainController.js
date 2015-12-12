angular
  .module('YoutubeApp')
  .controller('MainController', MainController);

MainController.$inject = ['$window', '$document', '$scope', 'YoutubeService'];
function MainController($window, $document, $scope, YoutubeService) {
  var main = this;

  main.youtubeLoaded = false;
  main.keyword = "";
  main.errorMsg = "";

  $window.initGoogleApi = function() {
    gapi.client.setApiKey("AIzaSyDGn3VICr2h9ZtdgcUjmVOSCzqbtGlKnis");
    gapi.client.load('youtube', 'v3').then(function() {
      $scope.$evalAsync(function() {
        main.search();
      },0);
    });
  }

  main.videos = [];

  main.search = function() {
    YoutubeService.search(main.keyword)
    .then(function(videos) {
      $scope.$evalAsync(function() {

        if(videos.length === 0) {
          main.errorMsg = "No videos were found with the search term '" + main.keyword + "'. Please try again.";
        }
        else {
          main.errorMsg = "";
          main.videos = videos;
          main.youtubeLoaded = true;
        }
        $document.find('form')[0].reset();
      },0);
    })
    .catch(function(err) {
      $scope.$evalAsync(function(){
        main.errorMsg = "Oops! There was an error loading the video content. Please try again.";
      },0);
    });
  }
}