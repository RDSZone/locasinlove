'use strict';

/**
 * @ngdoc service
 * @name locasApp.canvasService
 * @description
 * # canvasService
 * Factory in the locasApp.
 */
angular.module('locasApp').factory('canvasService', function ($window, $http) {

  var canvas = document.getElementById('canvas');
  var ctx;

  //container
  var fallingDrops = [];

  var width = $window.innerWidth;
  var height = $window.innerHeight;

  var drawBg = function(){
    ctx.clearRect(0,0,width, height);
  };





  var canvasMethods = {

    fallingDrops: [],
    noOfDrops: 1000,

    x: 0,
    y: 0,
    alreadyInit: false,


    width: $window.innerWidth,
    height: $window.innerHeight,




    draw: function(){

      //clears the canvas
      drawBg();
      

      for (var i = 0; i < fallingDrops.length; i++){
        ctx.drawImage (fallingDrops[i].image, fallingDrops[i].x, fallingDrops[i].y, fallingDrops[i].image.width, fallingDrops[i].image.height);
        fallingDrops[i].y += fallingDrops[i].speed; //Set the falling speed
        
        if (fallingDrops[i].y > height){  //Repeat the raindrop when it falls out of view
          fallingDrops[i].y = -55; //Account for the image size
          fallingDrops[i].x = Math.random() * width;    //Make it appear randomly along the width    
        }

      }

    },

    ranIcon: function(){

      var length = fallingIcons.length;
      var ranNum = Math.floor(Math.random() * length);
      return ranNum;

    },



    setup: function(image){
      var self = this;
      console.log(self.alreadyInit);


      self.width = $window.innerWidth - 10;
      self.height = $window.innerHeight - 10;
      canvas.width = self.width;
      canvas.height = self.height;

      if (canvas.getContext){
        

        ctx = canvas.getContext('2d');

        //clear the canvas before starting, so route changes dont' double up
        ctx.clearRect(0,0,self.width,self.height);

        for (var i = 0; i < self.noOfDrops; i++){
          var fallingDr = {};

          var size = Math.floor(Math.random() * 15);

          fallingDr.image = new Image();
          fallingDr.image.src = image;
          fallingDr.image.height = size;
          fallingDr.image.width = size;

          fallingDr.x = Math.random() * canvas.width;
          fallingDr.y = Math.random() * 5;
          fallingDr.speed = 3 + Math.random() * 4;
          fallingDrops.push(fallingDr);
        }

        if (self.alreadyInit === false){
          setInterval(self.draw, 25);
        }
        
      }

    }


  };

  // Public API here
  return {
    setup: function (image) {
      canvasMethods.setup(image);
    },
    loadImages: function(){
      return loadImages();
    },
    clearCanvas: function(){
      canvasMethods.clearCanvas();
    }
  };

});
