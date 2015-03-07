// Modules

var photoFightApp = angular.module('photoFightApp', ['ngTouch']);

// Controllers

var photoFightCtlr = photoFightApp.controller('PhotoFightCtlr', ['$scope', '$http', function($scope, $http) {

  $http.get('assets/data.json').success(function(data) {

    $scope.data = data;

    // Randomize order
    if(Math.random() > .5) {
      $scope.data.push($scope.data.shift());
    }

    $scope.data[0].images.sort(function(a,b) { return Math.random() - .5; });
    $scope.data[1].images.sort(function(a,b) { return Math.random() - .5; });

  });


  $scope.index = {
    set: Math.floor(Math.random()*2),
    sets: [0,0]
  };

  $scope.getCurrentImage = function() {
    return $scope.data[$scope.index.set].images[$scope.index.sets[$scope.index.set]];
  }

  $scope.incrementIndex = function(index, e) {
    $scope.index.set = index
    $scope.index.sets[index] = ($scope.index.sets[$scope.index.set] + 1) % $scope.data[$scope.index.set].images.length
  }

}]);
