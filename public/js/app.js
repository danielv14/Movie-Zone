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
      .state('contact', {
        url: '/contact',
        templateUrl: 'partials/contact.html'
      })
      .state('test', {
        url: '/test',
        templateUrl: 'partials/test.html'
      })

  }]);
