
angular
  .module('app')

    // Controller to view imdb id
    .controller('imdbObjectCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {

      // Create variable from param
      var imdbID = $stateParams.imdbID;

      // create poster variable to manipulate
      var newPoster = '';

      $http({
        method: 'GET',
        url: 'http://localhost:1337/api/imdb/' + imdbID + ''
      }).then(function successCallback(response) {
        $scope.details = response.data;
        console.log(response.data);
      }), function errorCallback(response) {
        console.log(response);
      }

      // http request to see if object is in database
      $http({
        method: 'GET',
        url: 'http://localhost:1337/watchlist/imdb/' + imdbID + ''
      }).then(function successCallback(response) {
        console.log(response.data);
        if (response.data.length === 0) {
          $scope.isInWatchlist = 'no';
        } else {
          $scope.isInWatchlist = 'yes';
        }
      }), function errorCallback(resonse) {
        console.log(response)
      }

      // add scope to watchlist
      $scope.addToWatchlist = function() {

        // saniatate poster url
        if ($scope.details.Poster != 'N/A') {
          newPoster = $scope.details.Poster.replace('http://ia.media-imdb.com/images/M/', '');
        } else {
          newPoster = 'no';
        }

        // http request to put object into db
        $http({
          method: 'PUT',
          url: 'http://localhost:1337/watchlist/insert/' + $scope.details.Title + '/' + $scope.details.Type + '/' + $scope.details.imdbID + '/' + $scope.details.Year + '/' + newPoster + '/'
        }).success(function successCallback(response) {
          console.log(response);
        }), function errorCallback(response) {
          console.log(response);
        }

        // Call api about imdb ID once again to update after clicked button
        $http({
          method: 'GET',
          url: 'http://localhost:1337/api/imdb/' + imdbID + ''
        }).then(function successCallback(response) {
          $scope.details = response.data;
          console.log(response.data);
        }), function errorCallback(response) {
          console.log(response);
        }

        // Call watchlist again to force watchlist button to be removed.
        $http({
          method: 'GET',
          url: 'http://localhost:1337/watchlist/imdb/' + imdbID + ''
        }).then(function successCallback(response) {
          console.log(response.data);
          if (response.data.length === 0) {
            $scope.isInWatchlist = 'no';
          } else {
            $scope.isInWatchlist = 'yes';
          }
        }), function errorCallback(resonse) {
          console.log(response)
        }
      }
    }])
