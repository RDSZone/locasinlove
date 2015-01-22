'use strict';

/**
 * @ngdoc function
 * @name locasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the locasApp
 */
angular.module('locasApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
