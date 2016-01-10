angular
  .module('app')

  .controller('contactCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.greeting = "HOLA";
    $http({
      method: 'GET',
      url: 'http://localhost:1337/api'
    }).then(function successCallback(response) {
      console.log(response);
    }), function errorCallback(response) {
      console.log(response);
    }
  }])

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
