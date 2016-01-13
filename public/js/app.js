'use strict';

 var app = angular
  .module('app', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/index.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'partials/about.html'
      })
      .state('imdbID', {
        url: '/imdb/:imdbID',
        templateUrl: 'partials/imdbObject.html'
      })
      .state('search', {
        url: '/search',
        templateUrl : 'partials/search.html'
      })
      .state('watchlist', {
        url: '/watchlist',
        templateUrl: 'partials/watchlist.html'
      })

      // set locationProvider
      $locationProvider.html5Mode(true);

  }]);
