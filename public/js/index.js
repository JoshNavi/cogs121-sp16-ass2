(function(d3) {
  "use strict";

  // ASSIGNMENT PART 1B
  // Grab the delphi data from the server
  d3.json("/agencycrimes", function(err, data) {
    if (err) {
      console.log(err);
      return;
    }
    makeDelphiChart(data);
  });
})(d3);

getColor = function(d, max) {
  var color = d3.scale.linear()
      .domain([0, 0.5, 1])
      .range(["green", "yellow", "red"]);

  return color(d/max);
};

getCountyData = function(agency) {
  d3.json('/agencies/' + agency, function(err, data) {
    if (err) {
      console.log(err);
      return;
    }
    makeDonutChart(data);
  });
}

makeDelphiChart = function(data) {
  var margin = {top: 20, right: 10, bottom: 100, left: 70},
      width = 930 - margin.right - margin.left,
      height = 800 - margin.top - margin.bottom;

  var innerWidth  = width  - margin.left - margin.right;
  var innerHeight = height - margin.top  - margin.bottom;
  var maxRating = d3.max( data.map(function(d){ return parseInt(d.total); }) );

  var xScale = d3.scale.ordinal().rangeRoundBands([0, innerWidth], 0);
  var yScale = d3.scale.linear().range([0, innerHeight]);

  // Define the chart
  var chart = d3
    .select(".chart")
    .append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" +  margin.left + "," + margin.right + ")");

  // Render the chart
  xScale.domain( data.map(function (d){ return d.agency; }) );
  yScale.domain([maxRating, 0]);

  chart
    .selectAll(".bar")
    .data(data.map(function(d){ return d.total; }) )
    .enter().append("rect")
    .attr("class", "bar")
    .attr("id", function (d, i){ return data[i].agency; })
    .attr("x", function(d, i) { return ((innerWidth / data.length)*i) + 30; })
    .attr("width", (innerWidth / data.length) - 50)
    .attr("y", function(d) { return innerHeight - (innerHeight*(d / maxRating)); })
    .attr("height", function(d) { return innerHeight*d/maxRating;  })
    .on("click", function(d, i) { getCountyData(data[i].agency); })
    .style("fill", function(d) { return getColor(d, maxRating); });
  // Orient the x and y axis
  var xAxis = d3.svg.axis().scale(xScale).orient("bottom");
  var yAxis = d3.svg.axis().scale(yScale).orient("left");

  // TODO: Append X axis
  chart
    .append("g")
    .attr("transform", "translate(" + 0 + "," + innerHeight + ")")
    .call(xAxis)
    .selectAll("text")
    .attr("transform", "rotate(" + -45 + ")")
    .style("text-anchor", "end");

  // TODO: Append Y axis
  chart
    .append("g")
    .call(yAxis);

};

makeDelphiChart2 = function(data) {
  var margin = {top: 20, right: 10, bottom: 100, left: 70},
      width = 500 - margin.right - margin.left,
      height = 700 - margin.top - margin.bottom;

  var innerWidth  = width  - margin.left - margin.right;
  var innerHeight = height - margin.top  - margin.bottom;
  var maxRating = d3.max( data.map(function(d){ return parseInt(d.total); }) );

  var xScale = d3.scale.ordinal().rangeRoundBands([0, innerWidth], 0);
  var yScale = d3.scale.linear().range([0, innerHeight]);

  // Define the chart
  var remove = d3
    .select(".chart2")
    .select("svg")
    .remove()

  var chart = d3
    .select(".chart2")
    .append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" +  margin.left + "," + margin.right + ")");

  // Render the chart
  xScale.domain( data.map(function (d){ return d.charge_description; }) );
  yScale.domain([maxRating, 0]);

  chart
    .selectAll(".bar")
    .data(data.map(function(d){ return d.total; }) )
    .enter().append("rect")
    .attr("class", "bar")
    .attr("id", function (d, i){ return data[i].charge_description; })
    .attr("x", function(d, i) { return ((innerWidth / data.length)*i) + 30; })
    .attr("width", (innerWidth / data.length) - 50)
    .attr("y", function(d) { return innerHeight - (innerHeight*(d / maxRating)); })
    .attr("height", function(d) { return innerHeight*d/maxRating;  })
    .style("fill", function(d) { return getColor(d, maxRating); });
  // Orient the x and y axis
  var xAxis = d3.svg.axis().scale(xScale).orient("bottom");
  var yAxis = d3.svg.axis().scale(yScale).orient("left");

  // TODO: Append X axis
  chart
    .append("g")
    .attr("transform", "translate(" + 0 + "," + innerHeight + ")")
    .call(xAxis)
    .selectAll("text")
    .attr("transform", "rotate(" + -45 + ")")
    .style("text-anchor", "end");

  // TODO: Append Y axis
  chart
    .append("g")
    .call(yAxis);

};

makeDonutChart = function(data) {
  var width = 500,
      height = 500,
      radius = Math.min(width, height) / 2;

  var max = d3.max( data.map(function(d){ return parseInt(d.total); }) );

  var color = d3.scale.ordinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

  var remove = d3
    .select(".chart2")
    .select("svg")
    .remove()

  var chart = d3.select(".chart2")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var arc = d3.svg.arc()
    .innerRadius(radius - 100)
    .outerRadius(radius);

  var pie = d3.layout.pie()
    .value(function(d) { return d.total; })
    .sort(null);

  var path = chart
    .selectAll("path")
    .data( pie(data) )
    .enter()
    .append("path")
    .style("fill", function(d, i) { return color(i); })
    .attr("d", arc);
};
