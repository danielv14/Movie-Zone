angular
  .module('app')

  // watchlist controller

  .controller('watchlistCtrl', ['$scope', '$http', function($scope, $http) {
    console.log('controller working');

    // fetch movies
    $http({
      method: 'GET',
      url: 'http://localhost:1337/watchlist/find/movie'
    }).then(function successCallback(response) {
      // console.log(response.data);
      if (response.data.length === 0) {
        $scope.watchlistMovie = 'empty';
      } else {
        $scope.watchlistMovie = response.data;

      }
      console.log(response.data);
    }), function errorCallback(response) {
      // console.log(response.data);
    }

    // fetch series
    $http({
      method: 'GET',
      url: 'http://localhost:1337/watchlist/find/series'
    }).then(function successCallback(response) {
      // console.log(response.data);
      if (response.data.length === 0) {
        $scope.watchlistSeries = 'empty';
      } else {
        $scope.watchlistSeries = response.data;

      }
      console.log(response.data);
    }), function errorCallback(response) {
      // console.log(response.data);
    }


    // delete object
    $scope.deleteObject = function() {
      console.log('delete object');
      // $http({
      //   method: 'DELETE',
      //   url: 'http://localhost:1337/watchlist/clear/' + $scope. + ''
      // })
    }

    // delete all series
    $scope.deleteAllSeries = function() {
      console.log('deleting all series');
      $http({
        method: 'GET',
        url: 'http://localhost:1337/watchlist/clear/series'
      }).then(function successCallback(response) {
        $scope.watchlistSeries = 'empty';
      }), function errorCallback(response) {
        console.log(response)
      }
    }

    // delete all movies
    $scope.deleteAllMovies = function() {
      console.log('deleting all series');
      $http({
        method: 'GET',
        url: 'http://localhost:1337/watchlist/clear/movie'
      }).then(function successCallback(response) {
        $scope.watchlistMovie = 'empty';
      }), function errorCallback(response) {
        console.log(response)
      }
    }

  }])
