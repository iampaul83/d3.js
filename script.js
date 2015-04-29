var data = [5,2,7,6,24,6,24,25];

var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 100]);
var y = 100/data.length;

d3.select(".chart")
  .selectAll("div")
  .data(data)
  .enter().append("div")
  .style("width", function(element){
  	 return x(element) + "%";
   })
  .style("height", y + "%");