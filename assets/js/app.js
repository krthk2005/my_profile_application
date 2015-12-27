var app=angular.module('myApp', ['ngRoute','myApp.nav.scroll','myApp.home','myApp.detail']);



app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
	$routeProvider.
      when('/', {
        templateUrl: 'partials/home-folder/main.html',
        controller: 'MainCtrl'
      }).
      when('/details', {
        templateUrl: 'partials/details-folder/detail.html',
        controller: 'DetailCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });

      
  if(window.history && window.history.pushState){
     $locationProvider.html5Mode({
             enabled: true,
             requireBase: false
     });
	 }
}])


