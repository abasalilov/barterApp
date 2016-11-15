angular.module('trade.services', [])

.factory('Trade', function ($http) {
  // Your code here
  console.log("inside Trade factory");
  var getTrade = function (user) {
    console.log('user inside Trade factory' ,user)
    return $http({
      method: 'GET',
      url: '/api/confirmation',
      params: {user: user}  })
    .then(function (resp) {
      return resp.data;
    });
  };

  return {
    getTrade: getTrade
  };
})
