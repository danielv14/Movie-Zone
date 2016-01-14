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


    // delete single movies
    $scope.deleteSingleMovie = function(object) {
      console.log('delete object');
      console.log(object);
      // http req to delete single object
      $http({
        method: 'DELETE',
        url: 'http://localhost:1337/watchlist/clear/single/' + object + ''
      })
      // http req to get updated info from the db about movies
      $http({
        method: 'GET',
        url: 'http://localhost:1337/watchlist/find/movie'
      }).then(function successCallback(response) {
        // if no movies where found in the db
        if (response.data.length === 0) {
          $scope.watchlistMovie = 'empty';
        } else {
          $scope.watchlistMovie = response.data;
        }
        console.log(response.data);
      }), function errorCallback(response) {
        // console.log(response.data);
      }
    }

    // delete single Series
    $scope.deleteSingleSeries = function(object) {
      console.log('delete object');
      console.log(object);
      // http req to delete object from db
      $http({
        method: 'DELETE',
        url: 'http://localhost:1337/watchlist/clear/single/' + object + ''
      })
      // http req to get the series from db again
      $http({
        method: 'GET',
        url: 'http://localhost:1337/watchlist/find/series'
      }).then(function successCallback(response) {
        // if no series in the db
        if (response.data.length === 0) {
          $scope.watchlistSeries = 'empty';
        } else {
          $scope.watchlistSeries = response.data;
        }
        console.log(response.data);
      }), function errorCallback(response) {
        // console.log(response.data);
      }
    }

    // delete all series
    $scope.deleteAllSeries = function() {
      console.log('deleting all series');
      $http({
        method: 'DELETE',
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
        method: 'DELETE',
        url: 'http://localhost:1337/watchlist/clear/movie'
      }).then(function successCallback(response) {
        $scope.watchlistMovie = 'empty';
      }), function errorCallback(response) {
        console.log(response)
      }
    }

  }])
