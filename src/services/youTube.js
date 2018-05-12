angular.module('video-player')
  .service('youTube', function($http) {
    this.search = function(params, callback) {
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        data: {
          q: params.query,
          max: params.maxResults,
          key: params.key,
          type: 'video',
          videoEmbeddable: 'true',
          part: 'snippet'  
        }
        
      }).then(function successCallback(response) {
        console.log('Data fetched!');
        callback(this.data);
      }, 
      function errorCallback(response){
        console.log('Stop trying to make fetch happen!');
      });
    };
  });
