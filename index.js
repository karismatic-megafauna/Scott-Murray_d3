var d3 = require('d3');

var body = d3.select('body');

var dataset = [ 5, 10, 15, 20, 25 ];

// body.selectAll('p')
// .data(dataset)
// .enter()
// .append('p')
// .text(function(d) { return d; })
// .style('padding', '10px')
// .style('color', 'white')
// .style("background-color", function(d){
//   if ( d % 2 === 0 ){
//     return 'blue';
//   } else {
//     return 'green';
//   }
// });

body.selectAll('div')
    .data(dataset)
    .enter()
    .append('div')
    .attr('class', 'bar')
    .style('height', function(d) {
      return d * 5 + 'px';
    });
