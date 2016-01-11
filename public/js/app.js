'use strict';

 var app = angular
  .module('app', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
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

  }]);
