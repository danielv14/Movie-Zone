angular
  .module('app')

  // Test controller
  .controller('testCtrl', ['$scope', '$http', function($scope, $http) {
    $http({
      method: 'GET',
      url: 'http://localhost:1337/api/imdb/tt2294629'
    }).then(function successCallback(response) {
      console.log(response);
      $scope.details = response.data;
    }), function errorCallback(response) {
      console.log(response);
    }
  }])
