'use strict';

/**
 * @ngdoc service
 * @name locasApp.youtubeService
 * @description
 * # youtubeService
 * Factory in the locasApp.
 */
angular.module('locasApp').factory('youtubeService', function ($http) {
    // Service logic
    // ...

  var tube = {

    key: 'AIzaSyBwwZnOqPR-llvZz5mRhtKCFmp-PgWk6Hc',
    base: 'https://www.googleapis.com/youtube/v3',

    init: function(){
      var self = this;
      $http.get(self.base + '/videos?id=locasinlove&key=' + self.key ).success(function(data){
        console.log(data);
      });
    }
  };

  // Public API here
  return {
    init: function () {
      return tube.init();
    }
  };
});
