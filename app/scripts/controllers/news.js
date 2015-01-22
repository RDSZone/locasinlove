'use strict';

/**
 * @ngdoc function
 * @name locasApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the locasApp
 */
angular.module('locasApp')
  .controller('NewsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
