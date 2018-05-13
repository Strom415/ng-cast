angular.module('video-player')

  .component('app', {
    controller: function(youTube) {
      this.videos = [];
      this.currentVideo = {};
      this.selectVideo = function(video) { this.currentVideo = video; };
      this.onClick = this.selectVideo.bind(this);
      this.object = {
        query: 'dogs',
        maxResults: 5,
        key: YOUTUBE_API_KEY
      };
      
      this.searchResults = function(response) {
        this.videos = response;
        this.currentVideo = this.videos[0];
      };
      
      this.searchResults = this.searchResults.bind(this);
      
      this.result = function(queryText) {
        this.object.query = queryText;
        youTube.search(this.object, this.searchResults);
      };
      
      this.result = this.result.bind(this);
      
      this.debouncer = function(cb) { _.debounce(cb, 3000); };
      
      this.result('tumbly puppies');
    },
  
    templateUrl: 'src/templates/app.html'
  });