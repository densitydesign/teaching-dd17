// Show navbar
window.addEventListener('scroll',function(){
  var lastScrollTop;
  var offset = document.querySelector('.main-wrapper').getBoundingClientRect().top;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   console.log(offset)
  if(offset < 0){ 
    $('.topnav').removeClass('hidden-nav')
  }
  
  else{
    $('.topnav').addClass('hidden-nav')
  }
//   lastScrollTop = scrollTop;
});

//show names of projects
$('#sd_vitae').on('mouseover', function(){
    $('#n_vitae').removeClass('mapitem_hidden');
}).on('mouseleave', function(){
    $('#n_vitae').addClass('mapitem_hidden');
})


$('#sd_aria').on('mouseover', function(){
    $('#n_aria').removeClass('mapitem_hidden');
}).on('mouseleave', function(){
    $('#n_aria').addClass('mapitem_hidden');
})


$('#sd_loreto_open_community').on('mouseover', function(){
    $('#n_loreto_open_community').removeClass('mapitem_hidden');
}).on('mouseleave', function(){
    $('#n_loreto_open_community').addClass('mapitem_hidden');
})


$('#sd_linnesto').on('mouseover', function(){
    $('#n_linnesto').removeClass('mapitem_hidden');
}).on('mouseleave', function(){
    $('#n_linnesto').addClass('mapitem_hidden');
})


$('#sd_green_between').on('mouseover', function(){
    $('#n_green_between').removeClass('mapitem_hidden');
}).on('mouseleave', function(){
    $('#n_green_between').addClass('mapitem_hidden');
})


$('#sd_co-inventing_doria').on('mouseover', function(){
    $('#n_co-inventing_doria').removeClass('mapitem_hidden');
}).on('mouseleave', function(){
    $('#n_co-inventing_doria').addClass('mapitem_hidden');
})


$('#sd_torre_botanica').on('mouseover', function(){
    $('#n_torre_botanica').removeClass('mapitem_hidden');
}).on('mouseleave', function(){
    $('#n_torre_botanica').addClass('mapitem_hidden');
})


$('#sd_milano_city_door').on('mouseover', function(){
    $('#n_milano_city_door').removeClass('mapitem_hidden');
}).on('mouseleave', function(){
    $('#n_milano_city_door').addClass('mapitem_hidden');
})


$('#sd_seimilano').on('mouseover', function(){
    $('#n_seimilano').removeClass('mapitem_hidden');
}).on('mouseleave', function(){
    $('#n_seimilano').addClass('mapitem_hidden');
})


$('#sd_scalo_di_porta_romana').on('mouseover', function(){
    $('#n_scalo_di_porta_romana').removeClass('mapitem_hidden');
}).on('mouseleave', function(){
    $('#n_scalo_di_porta_romana').addClass('mapitem_hidden');
})


$('#sd_lambrate_streaming').on('mouseover', function(){
    $('#n_lambrate_streaming').removeClass('mapitem_hidden');
}).on('mouseleave', function(){
    $('#n_lambrate_streaming').addClass('mapitem_hidden');
})


$('#sd_molecola').on('mouseover', function(){
    $('#n_molecola').removeClass('mapitem_hidden');
}).on('mouseleave', function(){
    $('#n_molecola').addClass('mapitem_hidden');
})


//show private projecs
$('#private_projects').on('mouseover', function(){
    $('#sd_scalo_di_porta_romana').addClass('focus');
    $('#n_scalo_di_porta_romana').removeClass('mapitem_hidden');
    $('#sd_seimilano').addClass('focus');
    $('#n_seimilano').removeClass('mapitem_hidden');
    $('#sd_torre_botanica').addClass('focus');
    $('#n_torre_botanica').removeClass('mapitem_hidden');
    $('#sd_milano_city_door').addClass('focus');
    $('#n_milano_city_door').removeClass('mapitem_hidden');
})
.on('mouseleave', function(){
    $('#sd_scalo_di_porta_romana').removeClass('focus');
    $('#n_scalo_di_porta_romana').addClass('mapitem_hidden');
    $('#sd_seimilano').removeClass('focus');
    $('#n_seimilano').addClass('mapitem_hidden');
    $('#sd_torre_botanica').removeClass('focus');
    $('#n_torre_botanica').addClass('mapitem_hidden');
    $('#sd_milano_city_door').removeClass('focus');
    $('#n_milano_city_door').addClass('mapitem_hidden');
})

//show c40 projects
$('#reinventing_cities').on('mouseover', function(){
    $('#sd_molecola').addClass('focus');
    $('#n_molecola').removeClass('mapitem_hidden');
    $('#sd_lambrate_streaming').addClass('focus');
    $('#n_lambrate_streaming').removeClass('mapitem_hidden');
    $('#n_lambrate_streaming').addClass('move_n_lambrate_streaming');
    $('#sd_linnesto').addClass('focus');
    $('#n_linnesto').removeClass('mapitem_hidden');
    $('#sd_loreto_open_community').addClass('focus');
    $('#n_loreto_open_community').removeClass('mapitem_hidden');
    $('#sd_green_between').addClass('focus');
    $('#n_green_between').removeClass('mapitem_hidden');
    $('#sd_aria').addClass('focus');
    $('#n_aria').removeClass('mapitem_hidden');
    $('#sd_vitae').addClass('focus');
    $('#n_vitae').removeClass('mapitem_hidden');
    $('#sd_co-inventing_doria').addClass('focus');
    $('#n_co-inventing_doria').removeClass('mapitem_hidden');
    $('#n_co-inventing_doria').addClass('move_n_co-inventing_doria');
})
.on('mouseleave', function(){
    $('#sd_molecola').removeClass('focus');
    $('#n_molecola').addClass('mapitem_hidden');
    $('#sd_lambrate_streaming').removeClass('focus');
    $('#n_lambrate_streaming').addClass('mapitem_hidden');
    $('#n_lambrate_streaming').removeClass('move_n_lambrate_streaming');
    $('#sd_linnesto').removeClass('focus');
    $('#n_linnesto').addClass('mapitem_hidden');
    $('#sd_loreto_open_community').removeClass('focus');
    $('#n_loreto_open_community').addClass('mapitem_hidden');
    $('#sd_green_between').removeClass('focus');
    $('#n_green_between').addClass('mapitem_hidden');
    $('#sd_aria').removeClass('focus');
    $('#n_aria').addClass('mapitem_hidden');
    $('#sd_vitae').removeClass('focus');
    $('#n_vitae').addClass('mapitem_hidden');
    $('#sd_co-inventing_doria').removeClass('focus');
    $('#n_co-inventing_doria').addClass('mapitem_hidden');
    $('#n_co-inventing_doria').removeClass('move_n_co-inventing_doria');
})


const repelForce = d3.forceManyBody().strength(-35).distanceMax(800);
const attractForce = d3.forceManyBody().strength(200).distanceMax(-10);


const width = d3.select("#wall").node().offsetWidth
const height = d3.select("#wall").node().offsetHeight 
const svg = d3.select("#wall").append("svg").attr("viewBox", `0 0 ${width} ${height}`)
const g = svg.append("g")
    .attr("preserveAspectRatio", "xMinYMin meet") // nel caso cancellare
    .attr("transform", `translate(${width/2}, ${height/2})`);

const simulation = d3.forceSimulation()
    .force("x", d3.forceX())
    .force("y", d3.forceY())
    .force("collide", d3.forceCollide().radius(d => -22))
    .force('charge', d3.forceManyBody().strength(2))
    .force("repelForce", repelForce)
    .on("tick", ticked);

function ticked() {
    node
        .attr("transform", d=>`translate(${d.x*1.5}, ${d.y/1.2})`);
}


let node = g.selectAll(".node")
function update(data) {

    node = node.data(data, d=>d.id)
    node.exit().remove()
    node = node.enter().append("g").merge(node)
    var sprite = node.append("image")
        .attr("width","20")
        .attr("height","20")
        .attr("href", d=>"./assets/data/SPRITE/"+d.name+".png")

    simulation.nodes(data)
    simulation.alpha(1)
    simulation.restart()    
    
    d3.select(sprite.filter(function(d){
        if (d.purpose === 'targhett'){
          return this
        }
      })
      .attr('class', 'slide-down')  
      .attr('pointer-events', 'none')
    )
}


// d3.selectAll('g').call(drag(simulation))
// function drag(simulation) {    
//     function dragstarted(event) {
//       if (!event.active) simulation.alphaTarget(0.3).restart();
//       event.subject.fx = event.subject.x;
//       event.subject.fy = event.subject.y;
//     }
    
//     function dragged(event) {
//       event.subject.fx = event.x;
//       event.subject.fy = event.y;
//     }
    
//     function dragended(event) {
//       if (!event.active) simulation.alphaTarget(0);
//       event.subject.fx = null;
//       event.subject.fy = null;
//     }
    
//     return d3.drag()
//       .on("start", dragstarted)
//       .on("drag", dragged)
//       .on("end", dragended);
// }












$('.learn-more').on('mouseover', function(){
    $(this).children('div').addClass('slided')
}).on('mouseleave', function(){
    $(this).children('div').removeClass('slided')
})



d3.json("./assets/data/data-id.json").then(data=>{
    update(data);   
})

$(document).ready(function slide(){
    let slideValue = document.getElementById("slider").value; 
    document.getElementById("my-img").style.clipPath = "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
})
function slide(){
    let slideValue = document.getElementById("slider").value; 
    document.getElementById("my-img").style.clipPath = "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
}