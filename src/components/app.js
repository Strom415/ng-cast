angular.module('video-player')

  .component('app', {
    controller: function() {
      this.videos = exampleVideoData;
      this.currentVideo = exampleVideoData[0];
      this.selectVideo = function(video) { this.currentVideo = video; };
      this.selectVideo = this.selectVideo.bind(this);
    },
  
    templateUrl: 'src/templates/app.html'
  });