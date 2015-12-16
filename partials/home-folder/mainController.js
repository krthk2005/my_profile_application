var app = angular.module('myApp.home', ['myApp.nav.scroll']);

app.controller('MainCtrl', ['$scope', function($scope){
	$scope.tab = 1;
	$scope.displayContent = function(tab){
		$scope.tab = tab;
	};
}])
