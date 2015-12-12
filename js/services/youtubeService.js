angular
  .module('YoutubeApp')
  .service('YoutubeService', YoutubeService);

YoutubeService.$inject = ['$q', 'YOUTUBE_URL'];
function YoutubeService($q, YOUTUBE_URL) {
  return {
    search: function(keyword) {

      return $q(function(resolve, reject) {

        gapi.client.youtube.search.list({
          q: keyword,
          part: "snippet",
          maxResults: 5,
          type: "video",
          order: "date"
        }).execute(function(res) {

          if(res.code) return reject(res);

          else {
            var data = res.items.map(function(item) {
              return {
                videoUrl: YOUTUBE_URL + item.id.videoId,
                title: item.snippet.title,
                description: item.snippet.description,
                date: new Date(item.snippet.publishedAt),
                imageUrl: item.snippet.thumbnails.high.url
              };
            });

            return resolve(data);
          }
        });

      });
    }
  }
};