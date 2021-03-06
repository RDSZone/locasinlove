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


	$scope.shows = [];
	$scope.pastShows = [];
	$scope.showCurrentShows = true;
	$scope.currentShowPeriod = 'AKTUELL';
	$scope.changePeriod = 'SO PASSÉ';



	contentfulClient.entries({'content_type': '2Vy9CNn3HyCeAQAIMIyaya', 'include': 1}).then(function(response){

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

			// -------------------------------------------------
			//
			// Loop through and discard any old shows
			// 
			// -------------------------------------------------


			if (moment(show.compareDate).isAfter(now)){
				$scope.shows.push(show);
			}
			else{
				$scope.pastShows.push(show);
			}

		}

		console.log($scope.pastShows);

		$scope.showsLoaded = true;
		
	});

	$scope.showToggle = function(){
		if ($scope.changePeriod === 'SO PASSÉ'){
			$scope.changePeriod = 'AKTUELL';
			$scope.currentShowPeriod = 'SO PASSÉ';
			$scope.showCurrentShows = false;
		}
		else{
			$scope.currentShowPeriod = 'AKTUELL';
			$scope.changePeriod = 'SO PASSÉ';
			$scope.showCurrentShows = true;
		}

	};

}]);
