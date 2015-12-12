angular
  .module('YoutubeApp')
  .directive('youtube', youtubeDirective);

function youtubeDirective() {
  return {
    replace: true,
    restrict: 'E',
    scope: {
      video: '='
    },
    templateUrl: 'youtubeView.html',
    link: function(scope, element, attrs) {
      element.find('div')
        .css({
          backgroundImage: 'url(' + scope.video.imageUrl + ')',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '100%'
        });

      element.find('iframe').on('load', function() {
        element.addClass('loaded');
      });
    }
  }
}