'use strict';

/**
 * @ngdoc directive
 * @name locasApp.directive:playerControls
 * @description
 * # playerControls
 */
angular.module('locasApp').directive('playerControls', ['youtubeService', function (youtubeService) {
	
	var link = function($scope){


		// ------------------------------------------------
		// Get list of all YouTube videos in playlist
		//
	
		youtubeService.getData().then(function(response){
		
			//set scope on videos
			$scope.videos = response;

			// ------------------------------------------------
			// Set up player once videos are in. Defaults to first video.
			//
			
			youtubeService.init().then(function(response){
				$scope.player = response;

				//retrieve current video
				$scope.video = youtubeService.getCurrent();
			});
		});





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
