angular
  .module('app')

  // watchlist controller

  .controller('watchlistCtrl', ['$scope', '$http', function($scope, $http) {
    console.log('controller working');
    $http({
      method: 'GET',
      url: 'http://localhost:1337/watchlist/find/all'
    }).then(function successCallback(response) {
      console.log(response.data);
      $scope.watchlist = response.data;
    }), function errorCallback(response) {
      console.log(response.data);
    }
  }])
