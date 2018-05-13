angular.module('video-player')
  
  .component('search', {
    bindings: {
      debouncer: '<',
      result: '<'
    },
    
    templateUrl: 'src/templates/search.html'
  });
