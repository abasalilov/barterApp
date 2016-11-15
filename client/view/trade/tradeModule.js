angular.module('tradeModule', [])

.controller('tradeController', function ($scope, Trade) {
  // Your code here
  $scope.data = {};
  $scope.user = {}
  $scope.tradeMade = function() {
    console.log($scope.user)
    Trade.getTrade($scope.user)
    .then(function(listings) {
      console.log(listings)
      $scope.data.listings = listings
    })

  }

});
