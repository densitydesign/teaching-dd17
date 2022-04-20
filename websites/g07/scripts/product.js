const id = new URLSearchParams(window.location.search).get('id');

//page title
document.title = "Product " + id + " - My Covid Souvenir";

//containers as a const -> append later
const imgContainer = d3.select("#prodImg");
const textContainer = d3.select("#prodText");

d3.json("data/souvenirs.json").then(function (data) {

    //FOR EACH row verify if the product fits into the category
    for (var i = 0; i < data.length; i++) {

        if (data[i].id == id) {

            textContainer.append('h2')
                .classed("product-name", true)
                .html(data[i].name)

            textContainer.append('h3')
                .classed("product-category", true)
                .html("Product category: " + data[i].category)

            imgContainer.append('img')
                .classed("product-image", true)
                .attr("src", data[i].image)

            imgContainer.append('a')
                .classed("amazon-link", true)
                .attr("href", data[i].link)
                .attr("target", "_blank")
                .html("Link to Amazon ↗")

            let semContainer = textContainer.append('div')
                .classed("product-tag", true)

            semContainer.append("p")
                .classed("tag-title", true)
                .html("Messages: ")

            let visContainer = textContainer.append('div')
                .classed("product-tag", true)

            visContainer.append("p")
                .classed("tag-title", true)
                .html("Visuals: ")

            let marketplaceContainer = textContainer.append('div')
                .classed("product-tag", true)
                .attr("id", "marketplace-container")

            marketplaceContainer.append("p")
                .classed("tag-title", true)
                .html("Amazon marketplaces: ")

            semTags = data[i].semantic.split(', ').map(s => s.toLowerCase());
            visTags = data[i].visual.split(', ').map(s => s.toLowerCase());

            semTags.forEach(function (semTag) {

                if(semTag != ""){

                var linkTag = "collection.html" + "?collection=" + semTag;

                semContainer.append('a')
                    .classed("tag", true)
                    .attr("href", linkTag)
                    .html(semTag)

                } else {

                semContainer.append('a')
                    .classed("tag blank", true)
                    .html("-")
                }

            })

            visTags.forEach(function (visTag) {

                if(visTag != ""){

                var linkTag = "collection.html" + "?collection=" + visTag;

                visContainer.append('a')
                    .classed("tag", true)
                    .attr("href", linkTag)
                    .html(visTag)

                } else {
    
                    visContainer.append('a')
                        .classed("tag blank", true)
                        .html("-")
                    }

            })

            countries = data[i].country.split(', ').map(s => s.toLowerCase());

            countries.forEach(function (country) {

                noDots = country.split(".").join("");
                flagLink = "./assets/svg/" + noDots + ".svg";

                let marketplace = marketplaceContainer.append('div')
                    .classed("marketplace", true)

                marketplace.append('img')
                    .classed("flag", true)
                    .attr("src", flagLink)

                marketplace.append('p')
                    .classed("domain", true)
                    .html(country)

            })

            break
        }

    }

    annotationCreate();

})

function annotationCreate() {

    annotations.forEach(function (annotation) {

        if (annotation.id == id) {

            var annotationContainer = textContainer.append("div")
                .classed("annotationContainer", true);

            var annotationPin = annotationContainer.append("div")
                .classed("annotation", true);

            annotationPin.append("div");

            annotationPin.append("p").html("!");

            annotationContainer.append("div")
                .classed("annotationText  hideAnnotation", true)
                .html(annotation.text)

            annotationPin.on("mouseover", handleMouseOver)
                .on("mouseout", handleMouseOut);

        }

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