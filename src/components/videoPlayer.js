angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      current: '<'
    },
    
    templateUrl: 'src/templates/videoPlayer.html'
  });