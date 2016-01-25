'use strict';

/**
 * @ngdoc overview
 * @name meanappApp
 * @description
 * # meanappApp
 *
 * Main module of the application.
 */
angular
  .module('meanappApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
