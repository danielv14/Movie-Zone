angular
  .module('app')
  .controller('contactCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.greeting = "HOLA";
    $http({
      method: 'GET',
      url: 'http://localhost:1337/api'
    }).then(function successCallback(response) {
      console.log('request worked');
      console.log(response);
    }), function errorCallback(response) {
      console.log('error');
      console.log(response);
    }
  }])
