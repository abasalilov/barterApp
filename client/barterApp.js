'use strict'

angular.module('barterApp', ['ngRoute', 'tradeModule', 'trade.services', 'loginModule', 'token.services'])

.config(function ($routeProvider,  $httpProvider) {

  $routeProvider
  
  .when('/signin', {
    templateUrl: './view/login/signin.html',
    controller: 'loginController'
  })
  .when('/signup', {
    templateUrl: './view/signup/signup.html'
  })
  .when('/profile', {
    templateUrl: './view/profile/profile.html'
  })
  .when('/trade', {
    templateUrl: './view/trade/trade.html',
    controller: 'tradeController'
  })

  .otherwise({
    redirectTo: '/signin'
  });
})

