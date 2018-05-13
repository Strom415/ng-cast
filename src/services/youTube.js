angular.module('video-player')
  .service('youTube', function($http) {
    this.search = function(data, callback) {
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          q: data.query,
          max: data.maxResults,
          key: data.key,
          type: 'video',
          videoEmbeddable: 'true',
          part: 'snippet'  
        }
      }).then(function successCallback(response) {
        console.log('Data fetched!');
        callback(response.data.items);
      }, 
      function errorCallback(){
        console.log('Stop trying to make fetch happen!');
      });
    };
  });
