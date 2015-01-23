'use strict';

/**
 * @ngdoc function
 * @name locasApp.controller:VideosCtrl
 * @description
 * # VideosCtrl
 * Controller of the locasApp
 */
angular.module('locasApp').controller('VideosCtrl', ['$scope', 'youtubeService', function ($scope, youtubeService) {
	
	// ------------------------------------------------
		// Get list of all YouTube videos in playlist
		//
	
	

	var alreadyInit = youtubeService.alreadyInit();
	console.log(alreadyInit);

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


}]);
