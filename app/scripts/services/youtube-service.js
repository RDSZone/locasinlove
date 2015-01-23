'use strict';

/* global YT:false */

/**
 * @ngdoc service
 * @name locasApp.youtubeService
 * @description
 * # youtubeService
 * Factory in the locasApp.
 */
angular.module('locasApp').factory('youtubeService', function ($http, $q, $window) {


  // -------------------------------------------------
  //
  // Initialize youtube api, and set up API service
  // 
  // -------------------------------------------------
  


  var tube = {

    key: 'AIzaSyBwwZnOqPR-llvZz5mRhtKCFmp-PgWk6Hc',
    base: 'https://www.googleapis.com/youtube/v3',
    userId: 'cTzmNyy1AXfYmLCtIewDhA',
    channelId: 'UUcTzmNyy1AXfYmLCtIewDhA',
    username: 'locasinlove',
    videoArray: [],

    //YT player iframe
    player: {},
    playerNode: document.getElementById('player'),

    //sizing
    winWidth: $window.innerWidth,
    winHeight: $window.innerHeight,
    ratio: 640/390,
    widthPercent: 0.7,

    currentItem: 0,

   
    // ------------------------------------------------
    // Loop through youtube videos, and create object with relevant
    // info
    //
    getData: function(){
      
      var self = this;
      var deferred = $q.defer();
      
      $http.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=' + self.channelId + '&maxResults=50&key=' + self.key ).success(function(data){
        
        var videoData = data.items;
        
        
        for (var i = 0; i < videoData.length; i++){

          var targetVideo = videoData[i].snippet;

          //video info
          var videoObject = {
            id: targetVideo.resourceId.videoId,
            title: targetVideo.title,
            description: targetVideo.description,
            thumbnail: targetVideo.thumbnails.standard
          };

          //push to array
          self.videoArray.push(videoObject);
        }

        deferred.resolve(self.videoArray);
      });

      return deferred.promise;
    },

    // ------------------------------------------------
    // Now that we have data returned, we can init the iframe API
    //

    init: function(){
      var self = this;
      var deferred = $q.defer();

      var w = angular.element($window);

      var tag = document.createElement('script');

      tag.src = 'https://www.youtube.com/iframe_api';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


      
      function onPlayerReady(event){
        deferred.resolve(self.player);
      }


      $window.onYouTubeIframeAPIReady = function(){
        self.player = new YT.Player('player', {
          height: 640,
          width: 390,
          //load first video from array
          videoId: self.videoArray[0].id,
          events: {
            'onReady': onPlayerReady
          },
          playerVars: {
            autoplay: false,
            modestbranding: 1,
            showinfo: 0
          }
        });
      };

      w.bind('resize', function(){
        self.winWidth = $window.innerWidth;
        self.playerNode.css({
          height: (self.winWidth * self.widthPercent) / self.ratio,
          width: self.winWidth * self.widthPercent,
        });
      });


      return deferred.promise;

    },

    // ------------------------------------------------
    // Returns current video information
    //
    
    getCurrent: function(){
      var self = this;
      return self.videoArray[self.currentItem];
    },

    // ------------------------------------------------
    // Next Video Function
    //

    nextVideo: function(){
      var self = this;

      //get ref to current video
      if (self.currentItem < self.videoArray.length){
        self.currentItem++;
      }

      else{
        self.currentItem = 0;
      }

      var newId = self.videoArray[self.currentItem].id;

      self.player.cueVideoById({'videoId': newId});

    },

    // ------------------------------------------------
    // Prev Video Function
    //

    prevVideo: function(){
      var self = this;

      //get ref to current video
      if (self.currentItem <= 0){
        self.currentItem = self.videoArray.length;
      }

      else{
        self.currentItem--;
      }

      var newId = self.videoArray[self.currentItem].id;

      self.player.cueVideoById({'videoId': newId});
    }
    
    


    



  };

  // Public API here
  return {
    getData: function () {
      return tube.getData();
    },

    init: function(){
      return tube.init();
    },

    getCurrent: function(){
      return tube.getCurrent();
    },

    nextVideo: function(){
      tube.nextVideo();
    },

    prevVideo: function(){
      tube.prevVideo();
    }
  };
});
