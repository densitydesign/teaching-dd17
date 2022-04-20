//containers as a const -> append later
const semCards = d3.select("#message-grid");
const visCards = d3.select("#visual-grid");

for (var collection in collectionData) {

  let collTitle = collectionData[collection].title;
  let collId = collectionData[collection].title.toLowerCase();
  let collType = collectionData[collection].type;
  let collImg = collectionData[collection].image;
  let collGif = collectionData[collection].gif;

  d3.json("data/souvenirs.json").then(function(data) {

    var count = 0;

    data.forEach(function(d) {

      dataValueMes = d.semantic.split(', ').map(s => s.toLowerCase());
      dataValueVis = d.visual.split(', ').map(s => s.toLowerCase());

      if (dataValueMes.includes(collId) || dataValueVis.includes(collId)) {
        count++;
      }
    });

    var sizeClass;

    if (count < 100) {

      sizeClass = "small"

    } else if (count < 500) {

      sizeClass = "medium"

    } else {

      sizeClass = "big"

    }

    let card;

    if (collType == "semantic") {

      card = semCards.append('a')
        .classed("collCard", true)
        .classed(sizeClass, true)
        .attr('href', 'collection.html?collection=' + collId)

    } else if (collType == "visual") {

      card = visCards.append('a')
        .classed("collCard", true)
        .classed(sizeClass, true)
        .attr('href', 'collection.html?collection=' + collId)

    } else {
      card = visCards.append('a')
        .attr('style', 'display: none')
    }

    card.append("h3")
      .classed("title", true)
      .html(collTitle)

    card.append("p")
      .classed("count", true)
      .html(count + " products")

    let thumbnail = card.append("img")
      .classed("thumbImg static", true)
      .attr("src", collImg)

    card.on("mouseover", function() {
        thumbnail.attr("src", collGif)
      })
      .on("mouseout", function() {
        thumbnail.attr("src", collImg)
      });

  });

}

document.querySelectorAll('.scrollBarStyle').forEach(item => {
  item.addEventListener('mouseenter', event => {
    //reset sections to minimum dimension
    document.querySelectorAll('.scrollBarStyle').forEach(item => {
      item.classList.remove("col-6");
      item.classList.remove("col-10");
      item.classList.add("col-2");

      let subtitle = item.getElementsByClassName("subtitle");
      subtitle[0].classList.remove("displayText");
      subtitle[0].classList.add("hideText");
    });

    //set the hovered section to max dimension
    item.classList.remove("col-2");
    item.classList.add("col-10");

    let subtitle = item.getElementsByClassName("subtitle");
    subtitle[0].classList.add("displayText");
    subtitle[0].classList.remove("hideText");


    document.querySelectorAll('.souvenir-grid').forEach(card => {
      card.classList.add('minifiedGrid');
    });

    item.querySelectorAll('.souvenir-grid').forEach(card => {
      card.classList.remove('minifiedGrid');
    });

    document.querySelectorAll('.collCard').forEach(card => {
      card.classList.add('minified');
    });

    item.querySelectorAll('.collCard').forEach(card => {
      card.classList.remove('minified');
    });

    document.querySelectorAll('.souvenir-grid').forEach(card => {
      card.classList.add('minifiedDarken');
    });

    item.querySelectorAll('.souvenir-grid').forEach(card => {
      card.classList.remove('minifiedDarken');
    });

  })
})
