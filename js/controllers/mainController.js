angular
  .module('YoutubeApp')
  .controller('MainController', MainController);

MainController.$inject = ['$window', '$document', '$timeout', 'YoutubeService'];
function MainController($window, $document, $timeout, YoutubeService) {
  var main = this;

  main.youtubeLoaded = false;
  main.keyword = "";
  main.errorMsg = "";

  $window.initGoogleApi = function() {
    gapi.client.setApiKey("AIzaSyDGn3VICr2h9ZtdgcUjmVOSCzqbtGlKnis");
    gapi.client.load('youtube', 'v3').then(function() {
      $timeout(function() {
        main.search();
      },0);
    });
  }

  main.videos = [];

  main.search = function() {
    YoutubeService.search(main.keyword)
    .then(function(videos) {
      $timeout(function() {

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
      $timeout(function(){
        main.errorMsg = "Oops! There was an error loading the video content. Please try again.";
      },0);
    });
  }
}