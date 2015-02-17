'use strict';

/**
 * @ngdoc overview
 * @name locasApp
 * @description
 * # locasApp
 *
 * Main module of the application.
 */
angular
  .module('locasApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ng-contentful'
  ])
  .config(['$stateProvider', '$urlRouterProvider', 'contentfulClientProvider', function ($stateProvider, $urlRouterProvider, contentfulClientProvider) {
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('news', {
        url: '/news',
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl'
      })
      .state('termine', {
        url: '/termine',
        templateUrl: 'views/tour-dates.html',
        controller: 'TourDatesCtrl'
      })
      .state('videos', {
        url: '/videos',
        templateUrl: 'views/videos.html'
      })
      .state('bilder', {
        url: '/bilder',
        templateUrl: 'views/photos.html',
        controller: 'PhotosCtrl'
      })
      .state('info', {
        url: '/info',
        templateUrl: 'views/info.html',
        controller: 'InfoCtrl'
      });

    contentfulClientProvider.setSpaceId('crt9xwohg8ee');
    contentfulClientProvider.setAccessToken('8edfa95984f64454c2f91352649eed26a4262b2a4c3054caf65b14bb0c88299a');


  }]);
