'use strict';

/**
 * @ngdoc directive
 * @name locasApp.directive:nav
 * @description
 * # nav
 */
angular.module('locasApp').directive('nav', function ($location) {
	
	var link = function($scope){
		$scope.go = function(path){
			$location.path(path);
		};
	};


	return {
		templateUrl: 'views/partials/_nav.html',
		restrict: 'A',
		replace: true,
		link: link
	};
});
