var app = angular.module('myApp.home', []);

app.controller('HomeCtrl', ['$scope', function($scope){
	$scope.test = "success detail page";
}])
