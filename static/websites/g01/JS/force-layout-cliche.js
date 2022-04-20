// File for comparing
$(document).ready(function () {
  if (!window.sessionStorage.getItem("isExecuted")) {
    window.sessionStorage.setItem("isExecuted", true);
  }
   else {
    $('.tutorial').addClass('closed')
  }
});



$('#project_label').on('click', function () {
  $(this).toggleClass('on-focus')
  $('.project_filters').toggleClass('closed')
  $('.arrow1').toggleClass('rotate')
});
$('#position_label').on('click', function () {
  $(this).toggleClass('on-focus')
  $('.position_filters').toggleClass('closed')
  $('.arrow2').toggleClass('rotate')
});
$('.tut-button, .close-info').on('click', function(){
  $('.tutorial').toggleClass('closed')
})

// Multi choice filtering
// const project = ['Aria', 'Co-Inventing Doria', 'Green Between', "L'innesto", 'Lambrate Streaming', 'Loreto Open Community', 'Milano City Door', 'MoLeCoLa', 'Scalo di Porta Romana', 'Sei Milano', 'Torre Botanica', 'Vitae']
// const plane = [1, 2, 3]

const width = d3.select("#force-layout").node().offsetWidth;
const height = d3.select("#force-layout").node().offsetHeight;
const svg = d3.select("#force-layout")
  .append("svg")
  .attr("preserveAspectRatio", "xMinYMin meet") // nel caso cancellare
  .attr("viewBox", `0 0 ${width} ${height}`)
  .call(d3.zoom()
    .scaleExtent([1, 6])
    .translateExtent([[0, 0], [width, height]])
    .on('zoom', (event) => {
      svg.attr('transform', event.transform);
    })
  )
  .append('g')
;

const simulation_t = d3.forceSimulation()
  .force("x", d3.forceX())
  .force("y", d3.forceY())
  .force("collide", d3.forceCollide().radius(d => 10))
  .force("charge", d3.forceManyBody().strength(-25))
  .on("tick", ticked)
  .stop();

function ticked() {
  // console.log(simulation.alpha())
  node.attr("transform", (d) => `translate(${d.x}, ${d.y})`);
}

// positions
const cluster = d3.scalePoint().range([0, width]);
const _positions = function (c, xORy) {
  const positions = {
    S00: { x: -2*width, y: -2*height },
    S01: { x: 0.40*width, y: 0.65*height },
    S02: { x: 0.15*width, y: 0.67*height },
    S03: { x: 0.15*width, y: 0.35*height },
    S04: { x: 0.18*width, y: 0.50*height },
    S05: { x: 0.79*width, y: 0.65*height },
    S06: { x: 0.38*width, y: 0.47*height },
    S07: { x: 0.40*width, y: 0.30*height },
    S08: { x: 0.50*width, y: 0.57*height },
    S09: { x: 0.63*width, y: 0.30*height },
    S10: { x: 0.70*width, y: 0.49*height },
    S11: { x: 0.82*width, y: 0.25*height },
    S12: { x: 0.50*width, y: 0.38*height },
    S13: { x: 0.60*width, y: 0.50*height },
    S15: { x: 0.78*width, y: 0.45*height },
    S16: { x: 0.27*width, y: 0.60*height },
    S17: { x: 0.27*width, y: 0.45*height },
    S19: { x: 0.72*width, y: 0.27*height },
    S20: { x: 0.28*width, y: 0.33*height },
    S21: { x: 0.65*width, y: 0.65*height },
  };
  return positions[c][xORy]
}

let node = svg.selectAll(".sprite");

function update(data) {
  node = node.data(data, (d) => d.id);
  node.exit().remove();
  node = node.enter().append("g").merge(node);

  var sprite = node
    .append("image")
    .attr("width", "25")
    .attr("height", "25")
    .attr("href", (d) => "./assets/data/SPRITE/" + d.name + ".png")
    .attr("data-project", d => d.project)
    .attr('data-name', d => d.name)
    .attr('data-stereotype', d => d.stereotype);

  d3.select(sprite.filter(function(d){
      if (d.purpose === 'targhett'){
        return this
      }
    })
    .attr('class', 'targhett')  
    .attr('pointer-events', 'none')
  )
  
  node.filter(function(d){
    if (d.purpose === 'targhett'){
      return this
    }
  })
  .raise();

  const zoom = d3.zoom()
      .scaleExtent([1, 8])
      .on("zoom", zoomed);

  function zoomed(event) {
    const {transform} = event;
    node.attr("transform", transform);
  }

  let controller = true;
  $('.tut-label').on('click', function(){
    if (controller === false) {
      d3.select(sprite.filter(function(d){
        if (d.purpose === 'targhett'){
          return this
        }
      }).attr('display', 'block'))

      controller = true;
      $(this).text('Hide labels')
    } 
    else {
      d3.select(sprite.filter(function(d){
        if (d.purpose === 'targhett'){
          return this
        }
      }).attr('display', 'none'))

      controller = false;
      $(this).text('Show labels')
    }
  })


  // OPEN MODAL WINDOW
	$('g > g').on('mouseover', function(){
    var project = $(this).children().attr('data-project')
    var stereotype = $(this).children().attr('data-stereotype')

    d3.select(sprite.filter(function(d){
        if (d.purpose === 'targhett'){
          return this
        }
      })
      .attr('display', 'none')
      .attr('pointer-events', 'none')
    )
    controller = false;
    $('.tut-label').text('Show labels')

    document.addEventListener('mousemove', (event) => {
      // TOP-LEFT
      if(event.clientX < window.innerWidth / 2){
        $('.info-display').css({'left': event.clientX, 'top': event.clientY})
      }
      // TOP-RIGHT
      else if (event.clientX > window.innerWidth / 2){
        $('.info-display').css({'right': window.innerWidth - event.clientX, 'top': event.clientY, 'left': 'auto'})
      }
    });
    $('.info-display').removeClass('visibility-toggle')

    if(stereotype == 'S01'){
      $('.info-stereotype').text('Shopaholic')
    }
    if(stereotype == 'S02'){
      $('.info-stereotype').text('Fridays for future')
    }
    if(stereotype == 'S03'){
      $('.info-stereotype').text('5g enthusiast')
    }
    if(stereotype == 'S04'){
      $('.info-stereotype').text('Bookworm cutie')
    }
    if(stereotype == 'S05'){
      $('.info-stereotype').text('Wolf of Wall Street')
    }
    if(stereotype == 'S06'){
      $('.info-stereotype').text('Lovey Dovey')
    }
    if(stereotype == 'S07'){
      $('.info-stereotype').text('Fashion diva')
    }
    if(stereotype == 'S08'){
      $('.info-stereotype').text('F is for family')
    }
    if(stereotype == 'S09'){
      $('.info-stereotype').text('#Squad')
    }
    if(stereotype == 'S10'){
      $('.info-stereotype').text('Socks and sandals')
    }
    if(stereotype == 'S11'){
      $('.info-stereotype').text('Place-older')
    }
    if(stereotype == 'S12'){
      $('.info-stereotype').text('Find me on Soundcloud')
    }
    if(stereotype == 'S13'){
      $('.info-stereotype').text('Tree-hugger')
    }
    if(stereotype == 'S15'){
      $('.info-stereotype').text('A child')
    }
    if(stereotype == 'S16'){
      $('.info-stereotype').text('Freshmen')
    }
    if(stereotype == 'S17'){
      $('.info-stereotype').text('Something futuristic')
    }
    if(stereotype == 'S19'){
      $('.info-stereotype').text('PETA')
    }
    if(stereotype == 'S20'){
      $('.info-stereotype').text('Hustler')
    }
    if(stereotype == 'S21'){
      $('.info-stereotype').text('No pain, no gain')
    }
    $('.info-project').text(project)

  });
  $('g > g').on('mouseleave', function(){
    $('.info-display').addClass('visibility-toggle')
  })



  // OPEN MODAL WINDOW
  $('g > g').on('click', function(){
    setTimeout(function() {
      $('.modal-wrapper').removeClass('visibility-toggle');
    }, 100)
    // console.log('primo')

    var project = $(this).children().attr('data-project');

      $(this).children().each(function(){
        var src = $(this).attr("href");
        var srcR = src.replace('.png', 'R.jpeg');
        
        ShowLargeImage(srcR);
        // console.log('secondo')
      });

        
    function ShowLargeImage(imagePath) {
      var img = new Image();   // Create new img element
      img.addEventListener('load', function() {
        // console.log('terzo')
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
      
      $('.project').text(project);
    }	
  });

  //CLOSE MODAL WINDOW	
  window.addEventListener("click", function(event) {
    var removeZoom = document.getElementsByClassName('img-magnifier-glass');
    var removed = document.getElementsByClassName('modal-img');

    $('.close-context').on('click', function () {
      $('.modal-wrapper').addClass('visibility-toggle'); // close modal-wrapper
      
      $(removed[0]).remove();				
      $(removeZoom[0]).remove();
    });

    var alessio = event.target
    
    if($('div#luca').has(alessio).length==false){

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
  

  simulation_t.nodes(data);
  simulation_t.force("x").x((d) => _positions(d.stereotype,"x"));
  simulation_t.force("y").y((d) => _positions(d.stereotype,"y"));
  simulation_t.alpha(1);
  simulation_t.restart();
}

data = d3.json("./assets/data/data-id.json").then((data) => {

  var sprite = node
    .append("image")
    .attr("width", "25")
    .attr("height", "25")
    .attr("href", (d) => "./assets/data/SPRITE/" + d.name + ".png")
    .attr("data-project", d => d.project)
    .attr('data-name', d => d.name)
    .attr('data-stereotype', d => d.stereotype);

  update(data)
  function filterJSON(data, key, value) {
    var result = [];

    for (var i in data) {
      if (data[i][key] === value) {
        result.push(data[i]);
      }
    }
    return result;
  }

  // var projects = [{
  //   ariaC: false,
  //   doriaC: false,
  //   greenbC: false,
  //   innestoC: false,
  //   lambrateC: false,
  //   loretoC: false,
  //   citydC: false,
  //   molecolaC: false,
  //   romanaC: false,
  //   seimC: false,
  //   torrebC: false,
  //   vitaeC: false
  // }]
  // var projects = [
  //   ariaC = false,
  //   doriaC = false,
  //   greenbC = false,
  //   innestoC = false,
  //   lambrateC = false,
  //   loretoC = false,
  //   citydC = false,
  //   molecolaC = false,
  //   romanaC = false,
  //   seimC = false,
  //   torrebC = false,
  //   vitaeC = false
  // ]
  
  var ariaC = false;
  var doriaC = false;
  var greenbC = false;
  var innestoC = false;
  var lambrateC = false;
  var loretoC = false;
  var citydC = false;
  var molecolaC = false;
  var romanaC = false;
  var seimC = false;
  var torrebC = false;
  var vitaeC = false;
  


  $('.filter_button').on('click', function(){
    $('.html-change-project').text($(this).attr('data-filter'))
  })
  $('.project_filters').on('click', $('.filter_button'), function(){
    $('.html-change-position').text('Position inside render')
  })

  // Aria
  var filteredAria = filterJSON(data, "project", "Aria")
  
  $('#button_aria').on('click', function () {
    ariaC = doriaC = greenbC = innestoC = lambrateC = loretoC = citydC = molecolaC = romanaC = seimC = torrebC = vitaeC = false;

    ariaC = true;
    console.log(ariaC)
    update(filteredAria)
  })

  // Co-inventing Doria
  var filteredDoria = filterJSON(data, "project", "Co-inventing Doria");

  $('#button_co-inventing_doria').on('click', function () {
    ariaC = doriaC = greenbC = innestoC = lambrateC = loretoC = citydC = molecolaC = romanaC = seimC = torrebC = vitaeC = false;
    doriaC = true;
    update(filteredDoria)
  })
  
  // GB Crescenzago
  var filteredCrescenzago = filterJSON(data, "project", "Green Between");

  $('#button_green_between').on('click', function () {
    ariaC = doriaC = greenbC = innestoC = lambrateC = loretoC = citydC = molecolaC = romanaC = seimC = torrebC = vitaeC = false;
    greenbC = true;
    console.log(greenbC)
    update(filteredCrescenzago)
  })
  
  // Innesto
  var filteredInnesto = filterJSON(data, "project", "L'innesto");

  $('#button_l_innesto').on('click', function () {
    ariaC = doriaC = greenbC = innestoC = lambrateC = loretoC = citydC = molecolaC = romanaC = seimC = torrebC = vitaeC = false;
    innestoC = true;
    update(filteredInnesto)
  })

  //Lambrate
  var filteredLambrate = filterJSON(data, "project", "Lambrate Streaming");

  $('#button_lambrate_streaming').on('click', function () {
    ariaC = doriaC = greenbC = innestoC = lambrateC = loretoC = citydC = molecolaC = romanaC = seimC = torrebC = vitaeC = false;
    lambrateC = true;
    update(filteredLambrate)
  })
  
  //Loreto
  var filteredLoreto = filterJSON(data, "project", "Loreto Open Community");

  $('#button_loreto_open_community').on('click', function () {
    ariaC = doriaC = greenbC = innestoC = lambrateC = loretoC = citydC = molecolaC = romanaC = seimC = torrebC = vitaeC = false;
    loretoC = true;
    update(filteredLoreto)
  })
  
  //City Door
  var filteredCityD = filterJSON(data, "project", "Milano City Door");
  
  $('#button_milano_city_door').on('click', function () {
    ariaC = doriaC = greenbC = innestoC = lambrateC = loretoC = citydC = molecolaC = romanaC = seimC = torrebC = vitaeC = false;
    citydC = true;
    update(filteredCityD)
  })
  
  //Molecola
  var filteredMolecola = filterJSON(data, "project", "MoLeCoLa");
  
  $('#button_molecola').on('click', function () {
    ariaC = doriaC = greenbC = innestoC = lambrateC = loretoC = citydC = molecolaC = romanaC = seimC = torrebC = vitaeC = false;
    molecolaC = true;
    update(filteredMolecola)
  })
  
  // P. Romana
  var filteredPRomana = filterJSON(data, "project", "Scalo di Porta Romana");
  
  $('#button_scalo_di_porta_romana').on('click', function () {
    ariaC = doriaC = greenbC = innestoC = lambrateC = loretoC = citydC = molecolaC = romanaC = seimC = torrebC = vitaeC = false;
    romanaC = true;
    update(filteredPRomana)
  })
  
  // Sei Milano
  var filtered6Milano = filterJSON(data, "project", "Sei Milano");
  
  $('#button_sei_milano').on('click', function () {
    ariaC = doriaC = greenbC = innestoC = lambrateC = loretoC = citydC = molecolaC = romanaC = seimC = torrebC = vitaeC = false;
    seimC = true;
    update(filtered6Milano)
  })
  
  // Torre Botanica
  var filteredTorre = filterJSON(data, "project", "Torre Botanica");
  
  $('#button_torre_botanica').on('click', function () {
    ariaC = doriaC = greenbC = innestoC = lambrateC = loretoC = citydC = molecolaC = romanaC = seimC = torrebC = vitaeC = false;
    torrebC = true;
    update(filteredTorre)
  })
  
  // Vitae
  var filteredVitae = filterJSON(data, "project", "Vitae");
  
  $('#button_vitae').on('click', function () {
    ariaC = doriaC = greenbC = innestoC = lambrateC = loretoC = citydC = molecolaC = romanaC = seimC = torrebC = vitaeC = false;
    vitaeC = true;
    update(filteredVitae)
  })
  


  // Background
  var filteredBg = filterJSON(data, "disposition", 3);
  $('#button_background').on('click', function () {
    $('.html-change-position').text($(this).text())
    if(ariaC == true){
      mioArray = data.filter(d => d.disposition ==3 && d.project == 'Aria')
      update(mioArray)
    }
    else if(doriaC == true){
      mioArray = data.filter(d => d.disposition ==3 && d.project == 'Co-inventing Doria')
      update(mioArray)
    }
    else if(greenbC == true){
      mioArray = data.filter(d => d.disposition ==3 && d.project == 'Green Between')
      update(mioArray)
    }
    else if(innestoC == true){
      mioArray = data.filter(d => d.disposition ==3 && d.project == "L'innesto")
      update(mioArray)
    }
    else if(lambrateC == true){
      mioArray = data.filter(d => d.disposition ==3 && d.project == 'Lambrate Streaming')
      update(mioArray)
    }
    else if(loretoC == true){
      mioArray = data.filter(d => d.disposition ==3 && d.project == 'Loreto Open Community')
      update(mioArray)
    }
    else if(citydC == true){
      mioArray = data.filter(d => d.disposition ==3 && d.project == 'Milano City Door')
      update(mioArray)
    }
    else if(molecolaC == true){
      mioArray = data.filter(d => d.disposition ==3 && d.project == 'MoLeCoLa')
      update(mioArray)
    }
    else if(romanaC == true){
      mioArray = data.filter(d => d.disposition ==3 && d.project == 'Scalo di Porta Romana')
      update(mioArray)
    }
    else if(seimC == true){
      mioArray = data.filter(d => d.disposition ==3 && d.project == 'Sei Milano')
      update(mioArray)
    }
    else if(torrebC == true){
      mioArray = data.filter(d => d.disposition ==3 && d.project == 'Torre Botanica')
      update(mioArray)
    }
    else if(vitaeC == true){
      mioArray = data.filter(d => d.disposition ==3 && d.project == 'Vitae')
      update(mioArray)
    }

    else{
      update(filteredBg)
      $('.html-change-position').text($(this).text())
    }
  })

  // Middle ground
  var filteredMg = filterJSON(data, "disposition", 2);
  $('#button_middleground').on('click', function () {
    $('.html-change-position').text($(this).text())
    if(ariaC == true){
      mioArray = data.filter(d => d.disposition ==2 && d.project == 'Aria')
      update(mioArray)
    }
    else if(doriaC == true){
      mioArray = data.filter(d => d.disposition ==2 && d.project == 'Co-inventing Doria')
      update(mioArray)
    }
    else if(greenbC == true){
      mioArray = data.filter(d => d.disposition ==2 && d.project == 'Green Between')
      update(mioArray)
    }
    else if(innestoC == true){
      mioArray = data.filter(d => d.disposition ==2 && d.project == "L'innesto")
      update(mioArray)
    }
    else if(lambrateC == true){
      mioArray = data.filter(d => d.disposition ==2 && d.project == 'Lambrate Streaming')
      update(mioArray)
    }
    else if(loretoC == true){
      mioArray = data.filter(d => d.disposition ==2 && d.project == 'Loreto Open Community')
      update(mioArray)
    }
    else if(citydC == true){
      mioArray = data.filter(d => d.disposition ==2 && d.project == 'Milano City Door')
      update(mioArray)
    }
    else if(molecolaC == true){
      mioArray = data.filter(d => d.disposition ==2 && d.project == 'MoLeCoLa')
      update(mioArray)
    }
    else if(romanaC == true){
      mioArray = data.filter(d => d.disposition ==2 && d.project == 'Scalo di Porta Romana')
      update(mioArray)
    }
    else if(seimC == true){
      mioArray = data.filter(d => d.disposition ==2 && d.project == 'Sei Milano')
      update(mioArray)
    }
    else if(torrebC == true){
      mioArray = data.filter(d => d.disposition ==2 && d.project == 'Torre Botanica')
      update(mioArray)
    }
    else if(vitaeC == true){
      mioArray = data.filter(d => d.disposition ==2 && d.project == 'Vitae')
      update(mioArray)
    }
    else{
      update(filteredMg)
    }
  })
  
  // Foreground
  var filteredFg = filterJSON(data, "disposition", 1);
  $('#button_foreground').on('click', function () {
    $('.html-change-position').text($(this).text())
    if(ariaC == true){
      mioArray = data.filter(d => d.disposition ==1 && d.project == 'Aria')
      update(mioArray)
    }
    else if(doriaC == true){
      mioArray = data.filter(d => d.disposition ==1 && d.project == 'Co-inventing Doria')
      update(mioArray)
    }
    else if(greenbC == true){
      mioArray = data.filter(d => d.disposition ==1 && d.project == 'Green Between')
      update(mioArray)
    }
    else if(innestoC == true){
      mioArray = data.filter(d => d.disposition ==1 && d.project == "L'innesto")
      update(mioArray)
    }
    else if(lambrateC == true){
      mioArray = data.filter(d => d.disposition ==1 && d.project == 'Lambrate Streaming')
      update(mioArray)
    }
    else if(loretoC == true){
      mioArray = data.filter(d => d.disposition ==1 && d.project == 'Loreto Open Community')
      update(mioArray)
    }
    else if(citydC == true){
      mioArray = data.filter(d => d.disposition ==1 && d.project == 'Milano City Door')
      update(mioArray)
    }
    else if(molecolaC == true){
      mioArray = data.filter(d => d.disposition ==1 && d.project == 'MoLeCoLa')
      update(mioArray)
    }
    else if(romanaC == true){
      mioArray = data.filter(d => d.disposition ==1 && d.project == 'Scalo di Porta Romana')
      update(mioArray)
    }
    else if(seimC == true){
      mioArray = data.filter(d => d.disposition ==1 && d.project == 'Sei Milano')
      update(mioArray)
    }
    else if(torrebC == true){
      mioArray = data.filter(d => d.disposition ==1 && d.project == 'Torre Botanica')
      update(mioArray)
    }
    else if(vitaeC == true){
      mioArray = data.filter(d => d.disposition ==1 && d.project == 'Vitae')
      update(mioArray)
    }
    else{
      update(filteredFg)
    }
  })
  


  // Reset all filters
  $('#reset_filters').on('click', function(){
    update(data)
    $('.filter_button').removeClass('in-focus')
    $('.project_filters').addClass('closed')
    $('.html-change-project').text('Project')
    $('.html-change-position').text('Position inside render')

   ariaC = doriaC = greenbC = innestoC = lambrateC = loretoC = citydC = molecolaC = romanaC = seimC = torrebC = vitaeC = false;
  })


});