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
		contentfulClient.entries({'sys.id': '3BSziMeUmICgAWYimOA0qu', 'include': 1}).then(function(response){
			var image = response[0].fields.image.fields.file.url;

			// ------------------------------------------------
			// Destroy canvas before creation so route changes don't double up
			//
			
			canvasService.destroy();
			canvasService.setup(image);
		});
	};


	


	return {
		restrict: 'EA',
		link: link
	};
}]);
