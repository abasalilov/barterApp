angular.module('loginModule', [])

.controller('loginController', function ($scope, $window, $location, Token) {
  // Your code here
  $scope.user = {};

  $scope.authenticateUser = function () {
    Token.signin($scope.user)
    .then(function (token) {
      $window.localStorage.setItem('/', token);
      $location.path('/');
    })
    .catch(function (error) {
      console.error(error);
    });
  };

  $scope.signup = function () {
    Token.signup($scope.user)
    .then(function (token) {
      $window.localStorage.setItem('/', token);
      $location.path('/');
    })
    .catch(function (error) {
      console.error(error);
    });
  };

});
