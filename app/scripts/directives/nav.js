'use strict';

/**
 * @ngdoc directive
 * @name locasApp.directive:nav
 * @description
 * # nav
 */
angular.module('locasApp').directive('nav', function () {
	return {
		templateUrl: 'views/partials/_nav.html',
		restrict: 'A',
		replace: true
	};
});
