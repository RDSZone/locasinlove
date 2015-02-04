'use strict';

/**
 * @ngdoc directive
 * @name locasApp.directive:navStuff
 * @description
 * # navStuff
 */
angular.module('locasApp').directive('navStuff', function () {

	var link = function($scope){

		$scope.nav = {
			open: false,
			burger: $('.burger'),
			openNav: $('.nav-overlay'),

			toggle: function(){
				var self = this;

				if (self.open){
					self.burger.removeClass('open');
					self.openNav.removeClass('open-up');
					self.open = false;
				}
				else{
					self.burger.addClass('open');
					self.openNav.addClass('open-up');
					self.open = true;
				}
			},

			close: function(){
				var self = this;

				self.burger.removeClass('open');
				self.openNav.removeClass('open-up');
				self.open = false;
			}

		};


		$scope.$on('$locationChangeStart', function(event) {
			// if ($scope.form.$invalid) {
			// 	event.preventDefault();
			// }

			$scope.nav.close();
		});

	};


	return {
		restrict: 'A',
		link: link
	};
});
