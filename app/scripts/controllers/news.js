'use strict';

/**
 * @ngdoc function
 * @name locasApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the locasApp
 */
angular.module('locasApp').controller('NewsCtrl', ['$scope', 'contentfulClient', function ($scope, contentfulClient) {

	contentfulClient.entries({'content_type': '6PwlNgr5pCEmYc8gggo2si', 'include': 1}).then(function(response){
		$scope.newsArray = response[0];
		console.log(response);
	});

}]);
