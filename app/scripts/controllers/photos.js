'use strict';

/**
 * @ngdoc function
 * @name locasApp.controller:PhotosCtrl
 * @description
 * # PhotosCtrl
 * Controller of the locasApp
 */
angular.module('locasApp').controller('PhotosCtrl', ['$scope', '$timeout', 'contentfulClient', function ($scope, $timeout, contentfulClient) {


	contentfulClient.entries({'content_type': '68E7MREEW484MIsYICmcKq', 'include': 10}).then(function(response){

		$scope.galleries = response;
		console.log(response);

	
		$timeout(function(){
			$('.slick').slick();
			$scope.imagesLoaded = true;
		},1000);
	});


	$scope.nextSlide = function(){
		$('.slick').slick('slickNext');
	};

	$scope.prevSlide = function(){
		$('.slick').slick('slickPrev');
	};


}]);
