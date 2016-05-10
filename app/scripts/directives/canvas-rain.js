'use strict';

/**
 * @ngdoc directive
 * @name locasApp.directive:canvasRain
 * @description
 * # canvasRain
 */
angular.module('locasApp').directive('canvasRain', ['contentfulClient', 'canvasService', function (contentfulClient, canvasService) {

	
	// -------------------------------------------------
	//
	// Simply grabs an image from Contentful to insert into the falling rain canvas, and inits the canvas
	// 
	// -------------------------------------------------
	
	var link = function(){

		canvasService.destroy().then(function(){
			canvasService.setup('images/drop.555c563c.jpg');
		});
	};


	


	return {
		restrict: 'EA',
		link: link
	};
}]);
