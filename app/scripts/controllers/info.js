'use strict';

/**
 * @ngdoc function
 * @name locasApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the locasApp
 */
angular.module('locasApp')
  .controller('InfoCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
