'use strict';
/* global moment:false */

/**
 * @ngdoc function
 * @name locasApp.controller:TourDatesCtrl
 * @description
 * # TourDatesCtrl
 * Controller of the locasApp
 */
angular.module('locasApp').controller('TourDatesCtrl', ['$scope', 'contentfulClient', function ($scope, contentfulClient) {


	var now = moment();

	var shows = [];

	$scope.shows = [];



	contentfulClient.entries({'content_type': '2Vy9CNn3HyCeAQAIMIyaya', 'include': 1}).then(function(response){
		console.log(response);

		for (var i = 0; i < response.length; i++ ){
			var item = response[i];

			var show = {
				compareDate: moment(item.fields.dateTime),
				title: item.fields.title,
				cityCountry: item.fields.cityCountry,
				venue: item.fields.venue,
				url: item.fields.url,
				date: item.fields.dateTime
			};


			if (moment(show.compareDate).isAfter(now)){
				console.log('hit');
				$scope.shows.push(show);
			}


		}

		console.log($scope.shows);
		

		// -------------------------------------------------
		//
		// Loop through and discard any old shows
		// 
		// -------------------------------------------------
		
	});

}]);
