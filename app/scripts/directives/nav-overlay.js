'use strict';

/**
 * @ngdoc directive
 * @name locasApp.directive:navOverlay
 * @description
 * # navOverlay
 */
angular.module('locasApp')
  .directive('navOverlay', function () {
    return {
      templateUrl: 'views/partials/_nav-overlay.html',
      restrict: 'A',
      replace: true
    };
  });
