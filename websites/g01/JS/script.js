$(document).ready(function(){
	$('.container > .title').addClass('hide-title'); // hide horizontal title = collapsed card
	$('.content-section').slice(1).addClass('disabled');
})

$(".container").click(function(e){
	$(this).addClass('active');
	$(this).children(":first").addClass('hide-ghost'); // hide vertical title
	$(this).children('.content-section').addClass('show-title').removeClass('disabled'); //show horizontal = open card


	// Collapse others
	$('.container').not(this).removeClass('active');
	$('.container').not(this).children().removeClass('show-title hide-ghost').addClass('disabled'); // show vertical title again and hide horizontal

})

// Mouse hover detection
let isMouseHover = false
let hoverCheck = $('.container');
hoverCheck.on('mouseenter', function(){
	if (!$(this).hasClass('active')) {
		$(this).addClass('cat-focus')
	}
})
hoverCheck.on('mouseleave', function(){
	$(this).removeClass('cat-focus')
})

// categories card generation
data = d3.json("assets/data/data.json");

// Select the container where we will put our HTML elements
let businessBoxes = d3.select("#business-box");
let squadBoxes = d3.select("#squad-box");
let loveyBoxes = d3.select("#lovey-box");
let familyBoxes = d3.select("#family-box");
let fridayBoxes = d3.select("#friday-box");
let fashionBoxes = d3.select("#fashion-box");
let enthusiastBoxes = d3.select("#enthusiast-box");
let socksBoxes = d3.select("#socks-box");
let freshmenBoxes = d3.select("#freshmen-box");
let gymBoxes = d3.select("#gym-box");
let childBoxes = d3.select("#child-box");
let hustlerBoxes = d3.select("#hustler-box");
let shopaholicBoxes = d3.select("#shopaholic-box");
let treehuggerBoxes = d3.select("#treehugger-box");
let bookwormBoxes = d3.select("#bookworm-box");
let olderBoxes = d3.select("#older-box");
let soundcloudBoxes = d3.select("#soundcloud-box");
let petaBoxes = d3.select("#peta-box");
let futuristicBoxes = d3.select("#futuristic-box");

let businessTxt = $(".business-number");
let squadTxt = $(".squad-number");
let loveyTxt = $(".lovey-number");
let familyTxt = $(".family-number");
let fridayTxt = $(".friday-number");
let fashionTxt = $(".fashion-number");
let enthusiastTxt = $(".enthusiast-number");
let socksTxt = $(".socks-number");
let freshmenTxt = $(".freshmen-number");
let gymTxt = $(".gym-number");
let childTxt = $(".child-number");
let hustlerTxt = $(".hustler-number");
let shopaholicTxt = $(".shopaholic-number");
let treehuggerTxt = $(".treehugger-number");
let bookwormTxt = $(".bookworm-number");
let olderTxt = $(".older-number");
let soundcloudTxt = $(".soundcloud-number");
let petaTxt = $(".peta-number");
let futuristicTxt = $(".futuristic-number");

data.then(function(data) {
	function filterJSONBusiness(data, key, value) {
		var result = [];
	
		for (var indicator in data) {
			if (data[indicator][key] === value) {
				result.push(data[indicator]);
			}
		}
		return result;
	}
	var filtered = filterJSONBusiness(data, 'stereotype', 'S05');

    var box = businessBoxes.selectAll(".box") // Inside our selection, select the available div elements
    .data(filtered)
    .enter() // Create new elements if the selection doesn't match the data
    .append("div") // Append a new div for each new data point
    .classed("box flex-display-center-center", true)
    .append("img") // Inside the previous selection, add a new HTML element
    .classed("box-img", true)
    .attr("src", function(d) { 
		return 'assets/data/SPRITE/' + d.render + '_' + d.type + d.index + '.png'
	})
	.attr("data-project", function(d){
		return d.project
	})
	.attr("data-city", function(d){
		return d.city
	});
	businessTxt.text(filtered.length)
	
	// SQUAD
	function filterJSONSquad(data, key, value) {
		var result = [];
	
		for (var indicator in data) {
			if (data[indicator][key] === value) {
				result.push(data[indicator]);
			}
		}
		return result;
	}
	var filtered = filterJSONSquad(data, 'stereotype', 'S09');

    box = squadBoxes.selectAll(".box") // Inside our selection, select the available div elements
    .data(filtered)
    .enter() // Create new elements if the selection doesn't match the data
    .append("div") // Append a new div for each new data point
    .classed("box flex-display-center-center", true)
    .append("img") // Inside the previous selection, add a new HTML element
    .classed("box-img", true)
    .attr("src", function(d) { 
		return 'assets/data/SPRITE/' + d.render + '_' + d.type + d.index + '.png'
	})
	.attr("data-project", function(d){
		return d.project
	})
	.attr("data-city", function(d){
		return d.city
	});
	squadTxt.text(filtered.length)

	
	// LOVEY DOVEY
	function filterJSONSquad(data, key, value) {
		var result = [];
	
		for (var indicator in data) {
			if (data[indicator][key] === value) {
				result.push(data[indicator]);
			}
		}
		return result;
	}
	var filtered = filterJSONSquad(data, 'stereotype', 'S06');

    box = loveyBoxes.selectAll(".box") // Inside our selection, select the available div elements
    .data(filtered)
    .enter() // Create new elements if the selection doesn't match the data
    .append("div") // Append a new div for each new data point
    .classed("box flex-display-center-center", true)
    .append("img") // Inside the previous selection, add a new HTML element
    .classed("box-img", true)
    .attr("src", function(d) { 
		return 'assets/data/SPRITE/' + d.render + '_' + d.type + d.index + '.png'
	})
	.attr("data-project", function(d){
		return d.project
	})
	.attr("data-city", function(d){
		return d.city
	});
	loveyTxt.text(filtered.length)
	
	// FAMILY
	function filterJSONSquad(data, key, value) {
		var result = [];
	
		for (var indicator in data) {
			if (data[indicator][key] === value) {
				result.push(data[indicator]);
			}
		}
		return result;
	}
	var filtered = filterJSONSquad(data, 'stereotype', 'S08');

    box = familyBoxes.selectAll(".box") // Inside our selection, select the available div elements
    .data(filtered)
    .enter() // Create new elements if the selection doesn't match the data
    .append("div") // Append a new div for each new data point
    .classed("box flex-display-center-center", true)
    .append("img") // Inside the previous selection, add a new HTML element
    .classed("box-img", true)
    .attr("src", function(d) { 
		return 'assets/data/SPRITE/' + d.render + '_' + d.type + d.index + '.png'
	})
	.attr("data-project", function(d){
		return d.project
	})
	.attr("data-city", function(d){
		return d.city
	});
	familyTxt.text(filtered.length)

	// FRIDAY
	function filterJSONSquad(data, key, value) {
		var result = [];
	
		for (var indicator in data) {
			if (data[indicator][key] === value) {
				result.push(data[indicator]);
			}
		}
		return result;
	}
	var filtered = filterJSONSquad(data, 'stereotype', 'S02');

    box = fridayBoxes.selectAll(".box") // Inside our selection, select the available div elements
    .data(filtered)
    .enter() // Create new elements if the selection doesn't match the data
    .append("div") // Append a new div for each new data point
    .classed("box flex-display-center-center", true)
    .append("img") // Inside the previous selection, add a new HTML element
    .classed("box-img", true)
    .attr("src", function(d) { 
		return 'assets/data/SPRITE/' + d.render + '_' + d.type + d.index + '.png'
	})
	.attr("data-project", function(d){
		return d.project
	})
	.attr("data-city", function(d){
		return d.city
	});
	fridayTxt.text(filtered.length)
	
	// FASHION
	function filterJSONSquad(data, key, value) {
		var result = [];
	
		for (var indicator in data) {
			if (data[indicator][key] === value) {
				result.push(data[indicator]);
			}
		}
		return result;
	}
	var filtered = filterJSONSquad(data, 'stereotype', 'S07');

    box = fashionBoxes.selectAll(".box") // Inside our selection, select the available div elements
    .data(filtered)
    .enter() // Create new elements if the selection doesn't match the data
    .append("div") // Append a new div for each new data point
    .classed("box flex-display-center-center", true)
    .append("img") // Inside the previous selection, add a new HTML element
    .classed("box-img", true)
    .attr("src", function(d) { 
		return 'assets/data/SPRITE/' + d.render + '_' + d.type + d.index + '.png'
	})
	.attr("data-project", function(d){
		return d.project
	})
	.attr("data-city", function(d){
		return d.city
	});
	fashionTxt.text(filtered.length)
	
	// 5G Enthusiast
	function filterJSONEnthusiast(data, key, value) {
		var result = [];
	
		for (var indicator in data) {
			if (data[indicator][key] === value) {
				result.push(data[indicator]);
			}
		}
		return result;
	}
	var filtered = filterJSONEnthusiast(data, 'stereotype', 'S03');

    box = enthusiastBoxes.selectAll(".box") // Inside our selection, select the available div elements
    .data(filtered)
    .enter() // Create new elements if the selection doesn't match the data
    .append("div") // Append a new div for each new data point
    .classed("box flex-display-center-center", true)
    .append("img") // Inside the previous selection, add a new HTML element
    .classed("box-img", true)
    .attr("src", function(d) { 
		return 'assets/data/SPRITE/' + d.render + '_' + d.type + d.index + '.png'
	})
	.attr("data-project", function(d){
		return d.project
	})
	.attr("data-city", function(d){
		return d.city
	});
	enthusiastTxt.text(filtered.length)
	
	// Socks and sandals
	function filterJSONSocks(data, key, value) {
		var result = [];
	
		for (var indicator in data) {
			if (data[indicator][key] === value) {
				result.push(data[indicator]);
			}
		}
		return result;
	}
	var filtered = filterJSONSocks(data, 'stereotype', 'S10');

    box = socksBoxes.selectAll(".box") // Inside our selection, select the available div elements
    .data(filtered)
    .enter() // Create new elements if the selection doesn't match the data
    .append("div") // Append a new div for each new data point
    .classed("box flex-display-center-center", true)
    .append("img") // Inside the previous selection, add a new HTML element
    .classed("box-img", true)
    .attr("src", function(d) { 
		return 'assets/data/SPRITE/' + d.render + '_' + d.type + d.index + '.png'
	})
	.attr("data-project", function(d){
		return d.project
	})
	.attr("data-city", function(d){
		return d.city
	});
	socksTxt.text(filtered.length)
	
	// Freshmen
	function filterJSONFreshmen(data, key, value) {
		var result = [];
	
		for (var indicator in data) {
			if (data[indicator][key] === value) {
				result.push(data[indicator]);
			}
		}
		return result;
	}
	var filtered = filterJSONFreshmen(data, 'stereotype', 'S16');

    box = freshmenBoxes.selectAll(".box") // Inside our selection, select the available div elements
    .data(filtered)
    .enter() // Create new elements if the selection doesn't match the data
    .append("div") // Append a new div for each new data point
    .classed("box flex-display-center-center", true)
    .append("img") // Inside the previous selection, add a new HTML element
    .classed("box-img", true)
    .attr("src", function(d) { 
		return 'assets/data/SPRITE/' + d.render + '_' + d.type + d.index + '.png'
	})
	.attr("data-project", function(d){
		return d.project
	})
	.attr("data-city", function(d){
		return d.city
	});
	freshmenTxt.text(filtered.length)
	
	// No pain no gain
	function filterJSONGym(data, key, value) {
		var result = [];
	
		for (var indicator in data) {
			if (data[indicator][key] === value) {
				result.push(data[indicator]);
			}
		}
		return result;
	}
	var filtered = filterJSONGym(data, 'stereotype', 'S21');

    box = gymBoxes.selectAll(".box") // Inside our selection, select the available div elements
    .data(filtered)
    .enter() // Create new elements if the selection doesn't match the data
    .append("div") // Append a new div for each new data point
    .classed("box flex-display-center-center", true)
    .append("img") // Inside the previous selection, add a new HTML element
    .classed("box-img", true)
    .attr("src", function(d) { 
		return 'assets/data/SPRITE/' + d.render + '_' + d.type + d.index + '.png'
	})
	.attr("data-project", function(d){
		return d.project
	})
	.attr("data-city", function(d){
		return d.city
	});
	gymTxt.text(filtered.length)
	
	// A child
	function filterJSONChild(data, key, value) {
		var result = [];
	
		for (var indicator in data) {
			if (data[indicator][key] === value) {
				result.push(data[indicator]);
			}
		}
		return result;
	}
	var filtered = filterJSONChild(data, 'stereotype', 'S15');

    box = childBoxes.selectAll(".box") // Inside our selection, select the available div elements
    .data(filtered)
    .enter() // Create new elements if the selection doesn't match the data
    .append("div") // Append a new div for each new data point
    .classed("box flex-display-center-center", true)
    .append("img") // Inside the previous selection, add a new HTML element
    .classed("box-img", true)
    .attr("src", function(d) { 
		return 'assets/data/SPRITE/' + d.render + '_' + d.type + d.index + '.png'
	})
	.attr("data-project", function(d){
		return d.project
	})
	.attr("data-city", function(d){
		return d.city
	});
	childTxt.text(filtered.length)
	
	// Hustler
	function filterJSONHustler(data, key, value) {
		var result = [];
	
		for (var indicator in data) {
			if (data[indicator][key] === value) {
				result.push(data[indicator]);
			}
		}
		return result;
	}
	var filtered = filterJSONHustler(data, 'stereotype', 'S20');

    box = hustlerBoxes.selectAll(".box") // Inside our selection, select the available div elements
    .data(filtered)
    .enter() // Create new elements if the selection doesn't match the data
    .append("div") // Append a new div for each new data point
    .classed("box flex-display-center-center", true)
    .append("img") // Inside the previous selection, add a new HTML element
    .classed("box-img", true)
    .attr("src", function(d) { 
		return 'assets/data/SPRITE/' + d.render + '_' + d.type + d.index + '.png'
	})
	.attr("data-project", function(d){
		return d.project
	})
	.attr("data-city", function(d){
		return d.city
	});
	hustlerTxt.text(filtered.length)
	
	// Shopaholic
	function filterJSONShopaholic(data, key, value) {
		var result = [];
	
		for (var indicator in data) {
			if (data[indicator][key] === value) {
				result.push(data[indicator]);
			}
		}
		return result;
	}
	var filtered = filterJSONShopaholic(data, 'stereotype', 'S01');

    box = shopaholicBoxes.selectAll(".box") // Inside our selection, select the available div elements
    .data(filtered)
    .enter() // Create new elements if the selection doesn't match the data
    .append("div") // Append a new div for each new data point
    .classed("box flex-display-center-center", true)
    .append("img") // Inside the previous selection, add a new HTML element
    .classed("box-img", true)
    .attr("src", function(d) { 
		return 'assets/data/SPRITE/' + d.render + '_' + d.type + d.index + '.png'
	})
	.attr("data-project", function(d){
		return d.project
	})
	.attr("data-city", function(d){
		return d.city
	});
	shopaholicTxt.text(filtered.length)
	
	// Tree-hugger
	function filterJSONTreehugger(data, key, value) {
		var result = [];
	
		for (var indicator in data) {
			if (data[indicator][key] === value) {
				result.push(data[indicator]);
			}
		}
		return result;
	}
	var filtered = filterJSONTreehugger(data, 'stereotype', 'S13');

    box = treehuggerBoxes.selectAll(".box") // Inside our selection, select the available div elements
    .data(filtered)
    .enter() // Create new elements if the selection doesn't match the data
    .append("div") // Append a new div for each new data point
    .classed("box flex-display-center-center", true)
    .append("img") // Inside the previous selection, add a new HTML element
    .classed("box-img", true)
    .attr("src", function(d) { 
		return 'assets/data/SPRITE/' + d.render + '_' + d.type + d.index + '.png'
	})
	.attr("data-project", function(d){
		return d.project
	})
	.attr("data-city", function(d){
		return d.city
	});
	treehuggerTxt.text(filtered.length)
	
	// Bookworm
	function filterJSONBookworm(data, key, value) {
		var result = [];
	
		for (var indicator in data) {
			if (data[indicator][key] === value) {
				result.push(data[indicator]);
			}
		}
		return result;
	}
	var filtered = filterJSONBookworm(data, 'stereotype', 'S04');

    box = bookwormBoxes.selectAll(".box") // Inside our selection, select the available div elements
    .data(filtered)
    .enter() // Create new elements if the selection doesn't match the data
    .append("div") // Append a new div for each new data point
    .classed("box flex-display-center-center", true)
    .append("img") // Inside the previous selection, add a new HTML element
    .classed("box-img", true)
    .attr("src", function(d) { 
		return 'assets/data/SPRITE/' + d.render + '_' + d.type + d.index + '.png'
	})
	.attr("data-project", function(d){
		return d.project
	})
	.attr("data-city", function(d){
		return d.city
	});
	bookwormTxt.text(filtered.length)
	
	// Place-older
	function filterJSONOlder(data, key, value) {
		var result = [];
	
		for (var indicator in data) {
			if (data[indicator][key] === value) {
				result.push(data[indicator]);
			}
		}
		return result;
	}
	var filtered = filterJSONOlder(data, 'stereotype', 'S11');

    box = olderBoxes.selectAll(".box") // Inside our selection, select the available div elements
    .data(filtered)
    .enter() // Create new elements if the selection doesn't match the data
    .append("div") // Append a new div for each new data point
    .classed("box flex-display-center-center", true)
    .append("img") // Inside the previous selection, add a new HTML element
    .classed("box-img", true)
    .attr("src", function(d) { 
		return 'assets/data/SPRITE/' + d.render + '_' + d.type + d.index + '.png'
	})
	.attr("data-project", function(d){
		return d.project
	})
	.attr("data-city", function(d){
		return d.city
	});
	olderTxt.text(filtered.length)
	
	// Soundcloud rapper
	function filterJSONSoundcloud(data, key, value) {
		var result = [];
	
		for (var indicator in data) {
			if (data[indicator][key] === value) {
				result.push(data[indicator]);
			}
		}
		return result;
	}
	var filtered = filterJSONSoundcloud(data, 'stereotype', 'S12');

    box = soundcloudBoxes.selectAll(".box") // Inside our selection, select the available div elements
    .data(filtered)
    .enter() // Create new elements if the selection doesn't match the data
    .append("div") // Append a new div for each new data point
    .classed("box flex-display-center-center", true)
    .append("img") // Inside the previous selection, add a new HTML element
    .classed("box-img", true)
    .attr("src", function(d) { 
		return 'assets/data/SPRITE/' + d.render + '_' + d.type + d.index + '.png'
	})
	.attr("data-project", function(d){
		return d.project
	})
	.attr("data-city", function(d){
		return d.city
	});
	soundcloudTxt.text(filtered.length)
	
	// PETA
	function filterJSONPeta(data, key, value) {
		var result = [];
	
		for (var indicator in data) {
			if (data[indicator][key] === value) {
				result.push(data[indicator]);
			}
		}
		return result;
	}
	var filtered = filterJSONPeta(data, 'stereotype', 'S19');

    box = petaBoxes.selectAll(".box") // Inside our selection, select the available div elements
    .data(filtered)
    .enter() // Create new elements if the selection doesn't match the data
    .append("div") // Append a new div for each new data point
    .classed("box flex-display-center-center", true)
    .append("img") // Inside the previous selection, add a new HTML element
    .classed("box-img", true)
    .attr("src", function(d) { 
		return 'assets/data/SPRITE/' + d.render + '_' + d.type + d.index + '.png'
	})
	.attr("data-project", function(d){
		return d.project
	})
	.attr("data-city", function(d){
		return d.city
	});
	petaTxt.text(filtered.length)
	
	// Futuristic
	function filterJSONFuturistic(data, key, value) {
		var result = [];
	
		for (var indicator in data) {
			if (data[indicator][key] === value) {
				result.push(data[indicator]);
			}
		}
		return result;
	}
	var filtered = filterJSONFuturistic(data, 'stereotype', 'S17');

    box = futuristicBoxes.selectAll(".box") // Inside our selection, select the available div elements
    .data(filtered)
    .enter() // Create new elements if the selection doesn't match the data
    .append("div") // Append a new div for each new data point
    .classed("box flex-display-center-center", true)
    .append("img") // Inside the previous selection, add a new HTML element
    .classed("box-img", true)
    .attr("src", function(d) { 
		return 'assets/data/SPRITE/' + d.render + '_' + d.type + d.index + '.png'
	})
	.attr("data-project", function(d){
		return d.project
	})
	.attr("data-city", function(d){
		return d.city
	});
	futuristicTxt.text(filtered.length)




	// OPEN MODAL WINDOW
	$('.box').on('click', function(){
		$(this).addClass('in-focus');
		setTimeout(function() {
			$('.modal-wrapper').removeClass('visibility-toggle');
		}, 100) 

		var city = $(this).children().attr('data-city');
		var project = $(this).children().attr('data-project');

		$(this).children().each(function (index) {
			// $(this).attr('onclick');
			var src = $(this).attr("src");
			console.log(src)
			var srcR = src.replace('.png', 'R.jpeg');
			ShowLargeImage(srcR);
		});
		
		function ShowLargeImage(imagePath) {
			
			var img = new Image();   // Create new img element
			img.addEventListener('load', function() {
				
				document.querySelector(".img-wrapper").appendChild(img)
				img.classList.add("modal-img");
				img.setAttribute("id", "to-magnify");
				img.setAttribute("width", img.getBoundingClientRect().width)
				img.setAttribute("height", img.getBoundingClientRect().height)
				// console.log(img, img.getBoundingClientRect())
				
				$(img).one('mousemove', function(){
					magnify("to-magnify", 3);
				})

			// execute drawImage statements here
			}, false);
			img.src = imagePath; // Set source path

			// $('.img-wrapper').prepend('<img id="test" class="modal-img" src="' + imagePath + '" />');
			
			$('.city').text(city + ',');
			$('.project').text(project);
		}	
	});
	//CLOSE MODAL WINDOW	
	window.addEventListener("click", function(event) {
		var removeZoom = document.getElementsByClassName('img-magnifier-glass');
		var removed = document.getElementsByClassName('modal-img');

		$('.close-context').on('click', function () {
			$('.modal-wrapper').addClass('visibility-toggle'); // close modal-wrapper
			$('.box').removeClass('in-focus')
			
			$(removed[0]).remove();				
			$(removeZoom[0]).remove();
		});

		var alessio = event.target
		
		if($('div#luca').has(alessio).length==false){
			$('.box').removeClass('in-focus')
	
			if($(".modal-wrapper").hasClass('visibility-toggle')==false){
				if ($(alessio).hasClass('.modal-wrapper')==false){
					
					$('.modal-wrapper').addClass('visibility-toggle'); // close modal-wrapper
					var removed = document.getElementsByClassName('modal-img');
					
					$(removed[0]).remove();				
					$(removeZoom[0]).remove();
				}
				
			}
		}
		$(document).on('keyup',function(evt) {
			if (evt.keyCode == 27) {
			   $('.modal-wrapper').addClass('visibility-toggle'); // close modal-wrapper
				$('.box').removeClass('in-focus')
				var removed = document.getElementsByClassName('modal-img');
				$(removed[0]).remove();
				$(removeZoom[0]).remove();
			}
		});
	});
});

// window.onclick = e => {
//     // console.log(e.target);  // to get the element
//     console.log(e.target.className);  // to get the element tag name alone
// 	// $(e.target).addClass('ccc');
// } 



// MAGNIFIER GLASS
function magnify(carlo, zoom) {
	var img, glass, w, h, bw;
	img = document.getElementById(carlo);

	/*create magnifier glass:*/
	glass = document.createElement("DIV");
	glass.setAttribute("class", "img-magnifier-glass");
	/*insert magnifier glass:*/
	img.parentElement.insertBefore(glass, img);
	/*set background properties for the magnifier glass:*/
	glass.style.backgroundImage = "url('" + img.src + "')";
	glass.style.backgroundRepeat = "no-repeat";
	glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
	bw = 3;
	w = glass.offsetWidth / 2;
	h = glass.offsetHeight / 2;
	/*execute a function when someone moves the magnifier glass over the image:*/
	glass.addEventListener("mousemove", moveMagnifier);
	img.addEventListener("mousemove", moveMagnifier);
	/*and also for touch screens:*/
	glass.addEventListener("touchmove", moveMagnifier);
	img.addEventListener("touchmove", moveMagnifier);
	function moveMagnifier(e) {
	  var pos, x, y;
	  /*prevent any other actions that may occur when moving over the image*/
	  e.preventDefault();
	  /*get the cursor's x and y positions:*/
	  pos = getCursorPos(e);
	  x = pos.x;
	  y = pos.y;
	  /*prevent the magnifier glass from being positioned outside the image:*/
	  if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
	  if (x < w / zoom) {x = w / zoom;}
	  if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
	  if (y < h / zoom) {y = h / zoom;}
	  /*set the position of the magnifier glass:*/
	  glass.style.left = (x - w) + "px";
	  glass.style.top = (y - h) + "px";
	  /*display what the magnifier glass "sees":*/
	  glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
	}
	function getCursorPos(e) {
	  var a, x = 0, y = 0;
	  e = e || window.event;
	  /*get the x and y positions of the image:*/
	  a = img.getBoundingClientRect();
	  /*calculate the cursor's x and y coordinates, relative to the image:*/
	  x = e.pageX - a.left;
	  y = e.pageY - a.top;
	  /*consider any page scrolling:*/
	  x = x - window.pageXOffset;
	  y = y - window.pageYOffset;
	  return {x : x, y : y};
	}
}

