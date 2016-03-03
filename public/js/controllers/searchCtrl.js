angular
  .module('app')

  // Search controller
  .controller('searchCtrl', ['$scope', '$http', function($scope, $http) {


    // using ng-click to trigger search
    $scope.search = function() {
      // Get movie result
      $http({
        method: 'GET',
        url: 'http://localhost:1337/api/search/type/movie/' + $scope.searchterm + '/1'
      }).then(function successCallback(response) {
        $scope.movies = response.data.Search;
        console.log(response.data.Search);
      }), function errorCallback(response) {
        console.log(response);
      }

      // Get series result
      $http({
        method: 'GET',
        url: 'http://localhost:1337/api/search/type/series/' + $scope.searchterm + '/1'
      }).then(function successCallback(response) {
        $scope.series = response.data.Search;
      }), function errorCallback(response) {
        console.log(response);
      }
    }

    $scope.pageOne = function() {
      console.log('previous page');
      // Get movie result
      $http({
        method: 'GET',
        url: 'http://localhost:1337/api/search/type/movie/' + $scope.searchterm + '/1'
      }).then(function successCallback(response) {
        $scope.movies = response.data.Search;
      }), function errorCallback(response) {
        console.log(response);
      }
      // Get series result
      $http({
        method: 'GET',
        url: 'http://localhost:1337/api/search/type/series/' + $scope.searchterm + '/1'
      }).then(function successCallback(response) {
        $scope.series = response.data.Search;
      }), function errorCallback(response) {
        console.log(response);
      }
    }


    $scope.pageTwo = function() {
      // Get movie result
      $http({
        method: 'GET',
        url: 'http://localhost:1337/api/search/type/movie/' + $scope.searchterm + '/2'
      }).then(function successCallback(response) {
        $scope.movies = response.data.Search;
      }), function errorCallback(response) {
        console.log(response);
      }
      // Get series result
      $http({
        method: 'GET',
        url: 'http://localhost:1337/api/search/type/series/' + $scope.searchterm + '/2'
      }).then(function successCallback(response) {
        $scope.series = response.data.Search;
      }), function errorCallback(response) {
        console.log(response);
      }
    }

    $scope.pageThree = function() {
      // Get movie result
      $http({
        method: 'GET',
        url: 'http://localhost:1337/api/search/type/movie/' + $scope.searchterm + '/3'
      }).then(function successCallback(response) {
        $scope.movies = response.data.Search;
      }), function errorCallback(response) {
        console.log(response);
      }
      // Get series result
      $http({
        method: 'GET',
        url: 'http://localhost:1337/api/search/type/series/' + $scope.searchterm + '/3'
      }).then(function successCallback(response) {
        $scope.series = response.data.Search;
      }), function errorCallback(response) {
        console.log(response);
      }
    }

    $scope.pageFour = function() {
      // Get movie result
      $http({
        method: 'GET',
        url: 'http://localhost:1337/api/search/type/movie/' + $scope.searchterm + '/4'
      }).then(function successCallback(response) {
        $scope.movies = response.data.Search;
      }), function errorCallback(response) {
        console.log(response);
      }
      // Get series result
      $http({
        method: 'GET',
        url: 'http://localhost:1337/api/search/type/series/' + $scope.searchterm + '/4'
      }).then(function successCallback(response) {
        $scope.series = response.data.Search;
      }), function errorCallback(response) {
        console.log(response);
      }
    }

    $scope.pageFive = function() {
      // Get movie result
      $http({
        method: 'GET',
        url: 'http://localhost:1337/api/search/type/movie/' + $scope.searchterm + '/5'
      }).then(function successCallback(response) {
        $scope.movies = response.data.Search;
      }), function errorCallback(response) {
        console.log(response);
      }
      // Get series result
      $http({
        method: 'GET',
        url: 'http://localhost:1337/api/search/type/series/' + $scope.searchterm + '/5'
      }).then(function successCallback(response) {
        $scope.series = response.data.Search;
      }), function errorCallback(response) {
        console.log(response);
      }
    }
  }])
