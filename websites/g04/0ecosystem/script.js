
let infoIcon;
let infoContainer;
let infoBox;
let infoButton;

function preload() {
  infoIcon = select("#infoIcon")
  infoContainer = select("#infoContainer");
  infoBox = select("#infoBox");
  infoButton = select("#infoButton");

  infoIcon.mousePressed(enlargeInfo);
  infoButton.mousePressed(reduceInfo);

  if (getItem("firstEcosystemLoad")==false) {
    infoBox.addClass("closedInfo");
    infoContainer.addClass("removeElements");
  }
}

function setup() {
  infoBox.style("transition",".5s");
  infoContainer.style("transition",".5s");
}

function reduceInfo() {
  infoBox.addClass("closedInfo");
  infoContainer.addClass("removeElements");
  if (getItem("firstEcosystemLoad")===null) {
    storeItem("firstEcosystemLoad", false);
  }
}

function enlargeInfo() {
  infoBox.removeClass("closedInfo");
  infoContainer.removeClass("removeElements");
}

d3.html('assets/mappa.svg').then(function (newDocument) {

    const svg = newDocument.querySelector('svg');

    // append the svg node to our webpage
    document.querySelector('#network-container').appendChild(svg);

    // applicazioni
    const applications = d3.selectAll("#applications > g");
    applications.each(function(){
        const classesString = d3.select(this).attr("id").split("_").join(" ")
        d3.select(this).attr("class", classesString)
    })
    applications.on("mouseover", function(){
        d3.select(this).style("cursor", "pointer")
    })
    applications.on("click", function () {
        handleClickApplication(this)
    })

    // categorie
    const categories = d3.selectAll("#categories > g");
    categories.each(function(){
        const classesString = d3.select(this).attr("id").split("_").join(" ")
        d3.select(this).attr("class", classesString)
    })
    categories.on("mouseover", function(){
        d3.select(this).style("cursor", "pointer")
    })
    categories.on("click", function () {
        handleClickCategory(this)
    })

    //bottone
    const knowmore = d3.select("#rettangolino");

    knowmore.on("click", function () {
        location.href = "https://www.tripadvisor.it/Restaurant_Review-g187849-d16648315-Reviews-Centoventicinque-Milan_Lombardy.html"
    })
    knowmore.on("mouseover", function(){
        d3.select(this).style("cursor", "pointer")
    })
    //legend
    const legend = d3.selectAll("#bob>circle");



    function handleClickApplication(element) {
        applications.style("opacity", 0.3)
        categories.style("opacity", 0.3)
        legend.attr("fill", "#d8d8d8")
        knowmore.attr("fill", "#f9f8f7")
        d3.select(element).style("opacity",1)
        const this_application = d3.select(element);
        const arr = this_application.attr("id").split("_")
        arr.forEach(function(name_class){
            //.decentralized
            d3.select("#categories").selectAll("."+name_class).style("opacity",1)

        })
    }

    function handleClickCategory(element) {
        applications.style("opacity", 0.3)
        categories.style("opacity", 0.3)
        const this_element=d3.select(element)
        this_element.style("opacity",1)
        const new_color=this_element.select("circle").attr("fill")
        knowmore.attr("fill", new_color)
        legend.attr("fill", new_color)
        const this_application = d3.select(element);
        const arr = this_application.attr("id").split("_")
        arr.forEach(function(name_class){
            //.decentralized
            d3.select("#applications").selectAll("."+name_class).style("opacity",1)
        })
    }

    d3.select('#no-category').on("click"), function() {
        legend.attr("fill", legend_back)
    }
    d3.select('#background').on('click', function(){
        applications.style('opacity',1)
        categories.style("opacity", 1)
        const this_back=d3.select("#background")
        const old_color=this_back.select("rect").attr("fill")
        knowmore.attr("fill", old_color)
        const legend_back=d3.selectAll("#bob>circle")
        const old_legend=legend_back.attr("fill", "#d8d8d8")
        legend.attr("fill", "#d8d8d8")
      });


  function handleClickLink(element) {
        categories.attr("xlink:href", "http://en.wikipedia.org/wiki/")
    }
});
