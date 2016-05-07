'use strict';

/* global Showdown: false */

/**
 * @ngdoc function
 * @name locasApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the locasApp
 */
angular.module('locasApp').controller('InfoCtrl', ['$scope', '$sce', 'contentfulClient', function ($scope, $sce, contentfulClient) {

	var converter = new Showdown.converter();


	contentfulClient.entries({'sys.id': '6doPuPlSdUSMYKYgYGiyKa', 'include': 1}).then(function(response){


		$scope.info = {};

		$scope.info.body = converter.makeHtml(response[0].fields.body);
	});



	$scope.trust = function(text){
		return $sce.trustAsHtml(text);
	};


}]);
