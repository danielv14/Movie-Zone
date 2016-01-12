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
    }

    $scope.deleteAll = function() {
      console.log('deleting all entries');
      $http({
        method: 'GET',
        url: 'http://localhost:1337/watchlist/clear'
      }).then(function successCallback(response) {
        console.log(response.data);
        $scope.watchlist =  'empty';
      }), function errorCallback(respone) {
        console.log(response);
      }
    }

  }])
