
'use strict'

angular.module('barterApp', ['ngRoute'])

.config(function ($routeProvider,  $httpProvider) {

  $routeProvider
  
  .when('/signin', {
    templateUrl: './view/signin.html'
  })
  .when('/signup', {
    templateUrl: './view/signup.html'
  })

  .when('/profile', {
    templateUrl: './view/user.html'
  })

  .when('/trade', {
    templateUrl: './view/trade.html'
  })

  .otherwise({
    redirectTo: '/signin'
  });
})

