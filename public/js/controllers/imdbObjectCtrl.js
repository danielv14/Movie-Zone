angular
  .module('app')

    // Controller to view imdb id
    .controller('imdbObjectCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
      // Create variable from param
      var imdbID = $stateParams.imdbID;
      $http({
        method: 'GET',
        url: 'http://localhost:1337/api/imdb/' + imdbID + ''
      }).then(function successCallback(response) {
        $scope.details = response.data;
        console.log(response.data);
      }), function errorCallback(response) {
        console.log(response);
      }
    }])
