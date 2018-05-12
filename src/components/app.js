angular.module('video-player')

  .component('app', {
    controller: function() {
      this.videos = exampleVideoData;
      this.current = exampleVideoData[0];
      this.handleClick = function() { console.log('yo'); };
    },
  
    templateUrl: 'src/templates/app.html'
  });