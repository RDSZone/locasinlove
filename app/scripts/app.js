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
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ng-contentful'
  ])
  .config(['$routeProvider', 'contentfulClientProvider', function ($routeProvider, contentfulClientProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/news', {
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl'
      })
      .when('/tour-dates', {
        templateUrl: 'views/tour-dates.html',
        controller: 'TourDatesCtrl'
      })
      .when('/videos', {
        templateUrl: 'views/videos.html',
        controller: 'VideosCtrl'
      })
      .when('/photos', {
        templateUrl: 'views/photos.html',
        controller: 'PhotosCtrl'
      })
      .when('/info', {
        templateUrl: 'views/info.html',
        controller: 'InfoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    contentfulClientProvider.setSpaceId('crt9xwohg8ee');
    contentfulClientProvider.setAccessToken('8edfa95984f64454c2f91352649eed26a4262b2a4c3054caf65b14bb0c88299a');


  }]);
