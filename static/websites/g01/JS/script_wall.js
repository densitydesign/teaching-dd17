// categories card generation
let data = d3.json("assets/data/data1.json");

// Select the container where we will put our HTML elements
let wall = d3.select("#wall");

data.then(function(data) {

	var svgContainer = wall.append('svg').attr("width", '100vw')
	.attr("height", '100vh');


	var circle = svgContainer.selectAll("circle")
  	.data(data)
 	.enter()
	.append('circle')
	.attr("cx", Math.random())
	.attr("cy", 50)
	.attr('r', 10)

	// console.log(data)
    // box = wall.selectAll(".box") // Inside our selection, select the available div elements
    // .data(data)
    // .enter() // Create new elements if the selection doesn't match the data
    // .append("div") // Append a new div for each new data point
    // .classed("box flex-display-center-center", true)
    // .append("img") // Inside the previous selection, add a new HTML element
    // .classed("box-img", true)
    // .attr("src", function(d) { 
	// 	return 'assets/data/SPRITE/' + d.render + '_' + d.type + d.index + '.png'
	// })
	// .attr("data-project", function(d){
	// 	return d.project
	// })
	// .attr("data-city", function(d){
	// 	return d.city
	// });

	$(function () {

		// used to store the number of links between two nodes. 
		// mLinkNum[data.links[i].source + "," + data.links[i].target] = data.links[i].linkindex;
		var mLinkNum = {};
		
		var w = 960,
			h = 500;
	
		var force = d3.layout.force()
					  .nodes(d3.values(data.nodes))
					  .links(data.links)
					  .size([w, h])
					  .linkDistance(200)
					  .charge(-1000)
					  .on("tick", tick)
					  .start();
	
		var svg = d3.select(".graphContainer").append("svg:svg")
					.attr("width", w)
					.attr("height", h);
	
		var path = svg.append("svg:g")
					  .selectAll("line")
					  .data(force.links())
					  .enter().append("svg:path")
					  .attr("class", "link")
					  .style("stroke-width", function (d) { return Math.sqrt(d.value); })
					  .style("stroke", function(d){
					  return color(d.value)
					  });
	
	
		var circle = svg.append("svg:g")
						.selectAll("circle")
						.data(force.nodes())
						.enter().append("svg:circle")
						.attr("r", function (d) { return (d.citation); })
						.style("fill", function (d) { return color(d.citation); })
						.call(force.drag);
	
		var text = svg.append("svg:g")
					  .selectAll("g")
					  .data(force.nodes())
					  .enter().append("svg:g");
	
		// A copy of the text with a thick white stroke for legibility.
		text.append("svg:text")
			.attr("x", 8)
			.attr("y", ".31em")
			.attr("class", "shadow")
			.text(function (d) { return d.name; });
	
		text.append("svg:text")
			.attr("x", 8)
			.attr("y", ".31em")
			.text(function (d) { return d.name; });
	
		// Use elliptical arc path segments to doubly-encode directionality.
		function tick() {
			path.attr("d", function (d) {
				var dx = d.target.x - d.source.x,
					dy = d.target.y - d.source.y,
					dr = Math.sqrt(dx * dx + dy * dy);
				// get the total link numbers between source and target node
				var lTotalLinkNum = mLinkNum[d.source.id + "," + d.target.id] || mLinkNum[d.target.id + "," + d.source.id];
				if (lTotalLinkNum > 1) {
					// if there are multiple links between these two nodes, we need generate different dr for each path
					dr = dr / (1 + (1 / lTotalLinkNum) * (d.linkindex - 1));
				}
				// generate svg path
				return "M" + d.source.x + "," + d.source.y +
					"A" + dr + "," + dr + " 0 0 1," + d.target.x + "," + d.target.y +
					"A" + dr + "," + dr + " 0 0 0," + d.source.x + "," + d.source.y;
			});
	
			// Add tooltip to the connection path
			path.append("svg:title")
				.text(function (d, i) { return d.name; });
	
			circle.attr("transform", function (d) {
				return "translate(" + d.x + "," + d.y + ")";
			});
	
			text.attr("transform", function (d) {
				return "translate(" + d.x + "," + d.y + ")";
			});
		}
	
		// sort the links by source, then target
		function sortLinks() {
			data.links.sort(function (a, b) {
				if (a.source > b.source) {
					return 1;
				}
				else if (a.source < b.source) {
					return -1;
				}
				else {
					if (a.target > b.target) {
						return 1;
					}
					if (a.target < b.target) {
						return -1;
					}
					else {
						return 0;
					}
				}
			});
		}
	
		//any links with duplicate source and target get an incremented 'linknum'
		function setLinkIndexAndNum() {
			for (var i = 0; i < data.links.length; i++) {
				if (i != 0 &&
					data.links[i].source == data.links[i - 1].source &&
					data.links[i].target == data.links[i - 1].target) {
					data.links[i].linkindex = data.links[i - 1].linkindex + 1;
				}
				else {
					data.links[i].linkindex = 1;
				}
				// save the total number of links between two nodes
				if (mLinkNum[data.links[i].target + "," + data.links[i].source] !== undefined) {
					mLinkNum[data.links[i].target + "," + data.links[i].source] = data.links[i].linkindex;
				}
				else {
					mLinkNum[data.links[i].source + "," + data.links[i].target] = data.links[i].linkindex;
				}
			}
		}
	});
});


