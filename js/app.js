angular
  .module('YoutubeApp',[])
  .constant('YOUTUBE_URL', 'https://www.youtube.com/embed/')
  .config(whiteList);

function initGoogleApi() {
  window.initGoogleApi();
}

whiteList.$inject = ['$sceDelegateProvider', 'YOUTUBE_URL'];
function whiteList($sceDelegateProvider, YOUTUBE_URL) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    YOUTUBE_URL + '**'
  ]);
}