var app=angular.module('myApp', ['ngRoute','myApp.home','myApp.detail']);

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider.
      when('/', {
        templateUrl: 'partials/home-folder/home.html',
        controller: 'HomeCtrl'
      }).
      when('/details', {
        templateUrl: 'partials/details-folder/detail.html',
        controller: 'DetailCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
}])

app.controller('myCtrl', function ($scope) {
})
