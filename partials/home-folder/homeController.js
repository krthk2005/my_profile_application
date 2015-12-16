var app = angular.module('myApp.home', []);

app.controller('HomeCtrl', ['$scope', function($scope){
	$scope.test = "success detail page";
}])
app.directive('spy', spy);


  function spy() {
    return {
      restrict: 'A',
      link: link
    };

    function link(scope, element, attrs) {

      // Dom ready
      $(function () {
        if (attrs.spy === 'affix') {
          $(element).affix({
            offset: {
              top: attrs.offsetTop || 10
              // bottom: attrs.offsetBottom || 10
            }
          });
        }
      });
    }
  }
