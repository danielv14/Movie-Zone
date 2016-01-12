

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
        console.log('Stuff to add to a Watchlist...');
        console.log('Title: ' + $scope.details.Title + ' that is a ' + typeof($scope.details.Title));
        console.log('ID: ' + $scope.details.imdbID + ' that is a ' + typeof($scope.details.imdbID));
        console.log('Type: ' + $scope.details.Type + ' that is a ' + typeof($scope.details.Type));
        console.log($scope.details.Poster);

        // create saniatry poster url
        if ($scope.details.Poster != 'N/A') {
          newPoster = $scope.details.Poster.replace('http://ia.media-imdb.com/images/M/', '');
          console.log('newPoster\n' + newPoster);
        } else {
          newPoster = 'no';
        }

        $http({
          method: 'POST',
          url: 'http://localhost:1337/watchlist/insert/' + $scope.details.Title + '/' + $scope.details.Type + '/' + $scope.details.imdbID + '/' + $scope.details.Year + '/' + newPoster + ''

        })
      }
    }])
