'use strict';

/**
 * @ngdoc directive
 * @name locasApp.directive:setSize
 * @description
 * # setSize
 */
angular.module('locasApp').directive('setSize', function () {
	
	var link = function($scope, element, attrs){

		var targetGallery = JSON.parse(attrs.gallery);

		console.log(targetGallery);

		var imageLength = targetGallery.length;

		

		// ------------------------------------------------
		// Set element width to however many times the photo length is
		//
		
		element.css({
			width: (100 * imageLength) + '%'
		});

		// ------------------------------------------------
		// Divide up kids
		//
		
		var children = element[0].children;
		for (var i = 0; i < children.length; i++ ){
			element[0].children[i].css({
				background: 'blue'
			});
		}

		// element.find('.image-container').css({
		// 	width: (100 / imageLength) + 'px'
		// });
	};


	return {
		restrict: 'A',
		link: link
	};
});
