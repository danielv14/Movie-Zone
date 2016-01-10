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
  // Controller to view imdb id
  .controller('imdbObjectCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
    // Create variable from param
    var imdbID = $stateParams.imdbID;
    $http({
      method: 'GET',
      url: 'http://localhost:1337/api/imdb/' + imdbID + ''
    }).then(function successCallback(response) {
      $scope.details = response.data;
    }), function errorCallback(response) {
      console.log(response);
    }
  }])
  // Search controller
  .controller('searchCtrl', ['$scope', '$http', function($scope, $http) {


    // using ng-click to trigger search
    $scope.search = function() {
      $http({
        method: 'GET',
        url: 'http://localhost:1337/api/search/all/' + $scope.searchterm + ''
      }).then(function successCallback(response) {
        // console.log(typeof(response.data.Search));
        // console.log(response.data.Search);
        $scope.details = response.data.Search;
      }), function errorCallback(response) {
        console.log(response);
      }
    }


  }])
