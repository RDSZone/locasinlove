'use strict';

/**
 * @ngdoc function
 * @name locasApp.controller:VideosCtrl
 * @description
 * # VideosCtrl
 * Controller of the locasApp
 */
angular.module('locasApp').controller('VideosCtrl', ['$scope', 'youtubeService', function ($scope, youtubeService) {
	youtubeService.init();

}]);
