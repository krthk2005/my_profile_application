angular.module('myApp.home', [])
.factory('chartConfiguration', function(){
	var chartConfig = {
        options: {
          chart: {
              type: 'line'
          }
        },
       title: {
            text: 'Awareness on various',
            x: -20
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
    return chartConfig;
})