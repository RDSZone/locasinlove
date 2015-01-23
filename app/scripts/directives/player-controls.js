'use strict';

/**
 * @ngdoc directive
 * @name locasApp.directive:playerControls
 * @description
 * # playerControls
 */
angular.module('locasApp').directive('playerControls', ['youtubeService', function (youtubeService) {
	
	var link = function($scope){


		





		$scope.nextVid = function(){
			youtubeService.nextVideo();

			//update info
			$scope.video = youtubeService.getCurrent();
		};

		$scope.prevVid = function(){
			youtubeService.prevVideo();

			//update info
			$scope.video = youtubeService.getCurrent();
		};
	};


	return {
		restrict: 'EA',
		link: link
	};
}]);
