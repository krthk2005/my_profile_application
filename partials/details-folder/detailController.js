var app = angular.module('myApp.detail', []);

app.controller('DetailCtrl', ['$scope', function($scope){
	$scope.test = "success detail page";
}])