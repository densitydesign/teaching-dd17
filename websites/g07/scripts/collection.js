//containers as a const -> append later
const souvenirContainer = d3.select("#all-souvenirs");
const coverContainer = d3.select("#coverContainer");

//retrieve category through link
const collection = new URLSearchParams(window.location.search).get('collection');

//page title
document.title = collectionData[collection].title + " - My Covid Souvenir";

//draw cover
let coverTxt = coverContainer.append('div')
  .classed("col-5", true);

coverTxt.append("h1")
  .classed("collectionTitle", true)
  .html(collectionData[collection].title)

let coverIntro = coverTxt.append("h3")
  .html(collectionData[collection].section)

if (collectionData[collection].text != "") {

  coverTxt.append("p")
    .classed("overview", true)
    .html("Overview:")

  coverTxt.append("p")
    .html(collectionData[collection].text)

}

let coverImg = coverContainer.append('div')
  .classed("col-7", true);

coverImg.append("img")
  .classed("img-cover", true)
  .attr("src", collectionData[collection].coverImage)

myData = [];

//load json data
d3.json("data/souvenirs.json").then(function(myDataRaw) {

  allCountries = [];

  //FOR EACH row verify if the product fits into the category
  myDataRaw.forEach(function(product) {

    //array with product categories
    dataSemantics = product.semantic.split(', ').map(s => s.toLowerCase());
    dataVisuals = product.visual.split(', ').map(s => s.toLowerCase());

    //IF product includes the category -> add its data to myData (array with all products fitting)
    if (dataSemantics.includes(collection) || dataVisuals.includes(collection)) {

      myData.push(product)

      countries = product.country.split(', ').map(s => s.toLowerCase());
      allCountries = allCountries.concat(countries);

    } else if (collection == "leftovers" && dataSemantics == "" && dataVisuals == "") {

      myData.push(product)

      countries = product.country.split(', ').map(s => s.toLowerCase());
      allCountries = allCountries.concat(countries);

    }

  })

  setCountries = [...new Set(allCountries)];

  var countCountries = [{
    name: 'none',
    value: 0
  }];

  setCountries.forEach(function(country) {

    var count = 0;

    allCountries.forEach(function(newCountry) {

      if (newCountry == country) {
        count++
      }

    })

    thisCountry = {
      'name': country,
      'value': count
    }

    for (var i = 0; i < countCountries.length; i++) {
      if (thisCountry.value > countCountries[i].value) {
        countCountries.splice(i, 0, thisCountry)
        break
      }
    }
  })

  countCountries.pop();

  countryList = coverContainer.append('div')
    .classed("countries", true);

  countryList.append("p")
    .classed("marketplace-title", true)
    .html("Number of products in this category sold in the following Amazon marketplaces:")

  for (var i = 0; i < countCountries.length; i++) {

    name = countCountries[i].name
    value = countCountries[i].value
    noDots = name.split(".").join("");
    flagLink = "./assets/svg/" + noDots + ".svg";

    let countryContainer = countryList.append('div')
      .classed('marketplace', true)

    countryContainer.append('h3')
      .classed("domain", true)
      .html(value)

    countryContainer.append('img')
      .classed("flag", true)
      .attr("src", flagLink)

    countryContainer.append('p')
      .classed("domain", true)
      .html(name)
  }

  //object type
  const productType = ['bracelets', 'caps', 'flags', 'masks', 'mugs', 'patches', 'pins', 'socks', 'stickers', 't-shirts', 'others']

  //display objects FOR EACH kind in myData
  productType.forEach(function(product) {

    let count = 0;

    //add 1 to count FOR each object of this kind in myData
    for (var object of myData) {
      if (object.category.toLowerCase() == product.toLowerCase()) {
        count++;
      }
    }

    //don't show object sections with 0 objects
    if (count > 0) {

      //display object name and count at the beginning of the section
      categoryName = souvenirContainer.append('div').classed('row categoryName', true)
      categoryName.append('h2').html(product + ': ' + count)

      //create souvenirContainer container
      let typeContainer = souvenirContainer.append("div")
        .classed("souvenir-grid", true);

      //FOR each object of this kind in my data show image
      for (var object of myData) {

        if (object.category.toLowerCase() == product.toLowerCase()) {

          var card = typeContainer.append('a')
            .classed("collCard productSize", true)
            .attr('id', 'prod' + object.id)
            .attr('href', 'product.html?id=' + object.id)

          card.append("div")
            .classed("annotationContainer", true);

          card.append("img")
            .classed("thumbImg", true)
            .attr("src", object.image)

          card.append("div")
            .classed("whitespace", true);
        }
      }
    }

  });

  annotationCreate();

})

function annotationCreate() {

  annotations.forEach(function(annotation) {

    var annotatedProduct = d3.select('#prod' + annotation.id);
    var annotationContainer = annotatedProduct.select(".annotationContainer");

    var annotationPin = annotationContainer.append("div")
      .classed("annotation", true);

    annotationPin.append("div");
    annotationPin.append("p").html("!");

    el = document.getElementById('prod' + annotation.id);

    if (el != null) {
      xPos = el.getBoundingClientRect().x;
      fullWidth = window.innerWidth;
      offsetPos = fullWidth - xPos;

      if (offsetPos < window.innerWidth/5) {
        annotationContainer.append("div")
          .classed("annotationText right  hideAnnotation", true)
          .html(annotation.text)

      }else {
        annotationContainer.append("div")
          .classed("annotationText center hideAnnotation", true)
          .html(annotation.text);
      }
    }

    annotationPin.on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);
  })
}

function handleMouseOver(e) {
  popUp = this.nextElementSibling;
  popUp.classList.remove('hideAnnotation')
  popUp.classList.add('displayAnnotation')

}

function handleMouseOut(e) {
  popUp = this.nextElementSibling;
  popUp.classList.remove('displayAnnotation')
  popUp.classList.add('hideAnnotation')
}
