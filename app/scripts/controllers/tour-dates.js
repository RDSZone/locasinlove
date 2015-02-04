'use strict';

/**
 * @ngdoc function
 * @name locasApp.controller:TourDatesCtrl
 * @description
 * # TourDatesCtrl
 * Controller of the locasApp
 */
angular.module('locasApp').controller('TourDatesCtrl', ['$scope', 'contentfulClient', function ($scope, contentfulClient) {

	contentfulClient.entries({'content_type': '2Vy9CNn3HyCeAQAIMIyaya', 'include': 1}).then(function(response){
		$scope.shows = response;
		console.log(response);
	});

}]);
