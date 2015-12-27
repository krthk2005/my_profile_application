var app = angular.module('myApp.home', ['myApp.nav.scroll','highcharts-ng']);

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

  $scope.addPoints = function () {
        var seriesArray = $scope.chartConfig.series
        var rndIdx = Math.floor(Math.random() * seriesArray.length);
        seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
    };

    $scope.swapChartType = function () {
        if (this.chartConfig.options.chart.type === 'line') {
            this.chartConfig.options.chart.type = 'bar'
        } else {
            this.chartConfig.options.chart.type = 'line'
            this.chartConfig.options.chart.zoomType = 'x'
        }
    }

    $scope.toggleLoading = function () {
        this.chartConfig.loading = !this.chartConfig.loading
    }

    $scope.chartConfig = {
        options: {
          chart: {
              type: 'line'
          }
        },
       title: {
            text: 'Awareness on various',
            x: -20 //center
        },
        subtitle: {
            text: 'Technologies',
            x: -20
        },
        xAxis: {
            categories: ['2011', '2012', '2013', '2014', '2015', '2016']
        },
        yAxis: {
            title: {
                text: 'Rating'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Java',
            data: [ 5, 6, 7, 8, 9, 8]
        }, {
            name: 'Android',
            data: [3, 5, 7, 9, 9, 8]
        }, {
            name: 'Hybrid Apps',
            data: [2, 2, 5, 7, 8, 8]
        }, {
            name: 'Angular JS',
            data: [0, 0, 0, 6, 8, 9]
        }, {
            name: 'Node JS',
            data: [0, 0, 0, 0, 7, 9]
        }, {
            name: 'Web Apps',
            data: [2, 4, 5, 6, 8, 9]
        }]
    }

}])
