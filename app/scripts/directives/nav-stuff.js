'use strict';

/**
 * @ngdoc directive
 * @name locasApp.directive:navStuff
 * @description
 * # navStuff
 */
angular.module('locasApp').directive('navStuff', ['$state', function ($state) {

	var link = function($scope){

		$scope.nav = {
			open: false,
			burger: $('.burger'),
			openNav: $('.nav-overlay'),
			selected: {},
			//default
			lastPath: 'home',

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
			},

			isSelected: function(path){
				var self = this;

				var current = $state.current.name;

				if (current === path){
					return true;
				}
				else{
					return false;
				}

			},

			go: function(path){

				var self = this;

				var current = $state.current.name;

				self.selected = path;
				self.lastPath = path;

				if (path === current){
					self.close();
				}
				else{
					$state.go(path);
				}
			}

		};


		$scope.$on('$locationChangeStart', function() {
			$scope.nav.close();
		});

	};


	return {
		restrict: 'A',
		link: link
	};
}]);
