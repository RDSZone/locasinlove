'use strict';

/* global requestAnimationFrame:false, cancelAnimationFrame: false */

/**
 * @ngdoc service
 * @name locasApp.canvasService
 * @description
 * # canvasService
 * Factory in the locasApp.
 */
angular.module('locasApp').factory('canvasService', function ($window, $http) {

  var canvas;
  var parent = document.getElementById('landing');
  var ctx;
  var animate;

  //container
  var fallingDrops = [];

  var width = $window.innerWidth;
  var height = $window.innerHeight;

  var drawBg = function(){
    ctx.clearRect(0,0,width, height);
  };


  function destroyCanvas(){
    cancelAnimationFrame(animate);
    if (parent && canvas){
      parent.removeChild(canvas);
    }
  }


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

      animate = requestAnimationFrame(canvasMethods.draw);

    },




    setup: function(image){
      var self = this;

      canvas = document.createElement('canvas');
      self.width = $window.innerWidth;
      self.height = $window.innerHeight;
      canvas.width = self.width;
      canvas.height = self.height;

      parent.appendChild(canvas);

      if (canvas.getContext){

        ctx = canvas.getContext('2d');

        for (var i = 0; i < self.noOfDrops; i++){
          var fallingDr = {};

          var size = Math.floor(Math.random() * 5);

          fallingDr.image = new Image();
          fallingDr.image.src = image;
          fallingDr.image.height = size;
          fallingDr.image.width = size;

          fallingDr.x = Math.random() * canvas.width;
          // ------------------------------------------------
          // Make sure they are above the page
          //
          
          fallingDr.y = Math.random() * -50;
          fallingDr.speed = 3 + Math.random() * 4;
          fallingDrops.push(fallingDr);
        }

        canvasMethods.draw();
      }

    }


  };

  // Public API here
  return {
    setup: function (image) {
      canvasMethods.setup(image);
    },
    destroy: function(){
      return destroyCanvas();
    }
  };

});
