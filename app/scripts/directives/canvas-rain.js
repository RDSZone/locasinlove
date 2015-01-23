'use strict';

/**
 * @ngdoc directive
 * @name locasApp.directive:canvasRain
 * @description
 * # canvasRain
 */
angular.module('locasApp').directive('canvasRain', ['canvasService', function (canvasService) {

	return {
		restrict: 'EA',
		link: function(){
			canvasService.setup();
		}
	};
}]);
