var app = angular.module('myApp.home', ['myApp.nav.scroll']);

app.controller('MainCtrl', ['$scope', function($scope){
	$scope.tab = 1;
	$scope.displayContent = function(tab){
		$scope.tab = tab;
	};
	$(".navbar a, footer a[href='#myPage']").on('click', function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){
   
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });

}])
