// Modules

var photoFightApp = angular.module('photoFightApp', ['ngTouch']);

// Controllers

var photoFightCtlr = photoFightApp.controller('PhotoFightCtlr', ['$scope', '$http', function($scope, $http) {

  //$http.get('assets/data.json').success(function(data) {
  //  $scope.data = data;
  //});
  $scope.data = [
    {
      "name":"Tanya",
      "images":["https://drive.google.com/thumbnail?id=0B0iGRSdhQ3rEYkF1Qk5WTUtmNWs&authuser=0&v=1425675915334&sz=w1682-h826", "assets/alpha/alpha2.jpg", "assets/alpha/alpha3.jpg"]
    },
    {
      "name":"Zack",
      "images":["assets/beta/beta1.jpg", "assets/beta/beta2.jpg", "assets/beta/beta3.jpg"]
    }
  ];

  // Randomize order
  if(Math.random() > .5) {
    $scope.data.push($scope.data.shift());
  }

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
