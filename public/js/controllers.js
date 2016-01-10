angular
  .module('app')

  // Test controller
  .controller('testCtrl', ['$scope', '$http', function($scope, $http) {
    $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?i=tt2294629'
    }).then(function successCallback(response) {
      $scope.details = response.data;
    }), function errorCallback(response) {
      console.log(response);
    }
  }])
