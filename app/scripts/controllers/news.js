'use strict';

/* global Showdown:false */

/**
 * @ngdoc function
 * @name locasApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the locasApp
 */
angular.module('locasApp').controller('NewsCtrl', [
	'$scope',
	'$sce',
	'contentfulClient',
	function ($scope, $sce, contentfulClient) {

		var converter = new Showdown.converter();

		$scope.newsArray = [];

		contentfulClient.entries({'content_type': '6PwlNgr5pCEmYc8gggo2si', 'include': 1}).then(function(response){

			for (var i = 0; i < response.length; i++ ){
				var data = response[i];
				// ------------------------------------------------
				// Loop through and make new object
				//
				var item = {
					title: data.fields.title,
					body: converter.makeHtml(data.fields.body),
					image: data.fields.image,
					date: data.sys.createdAt
				};

				$scope.newsArray.push(item);
			}

			$scope.newsLoaded = true;
		});

		$scope.trust = function(text){
			return $sce.trustAsHtml(text);
		};
	}
]);
