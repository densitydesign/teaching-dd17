 
const simulation = d3.forceSimulation()
    .force("x", d3.forceX())
    .force("y", d3.forceY())
    .force("collide", d3.forceCollide().radius(d => 8.5 + 0.5))
    .on("tick", ticked)
    //.stop()

function ticked() {
    node.attr("transform", d=>`translate(${d.x}, ${d.y})`)
}

const width = d3.select("#wall").node().offsetWidth
const height = d3.select("#wall").node().offsetHeight
const svg = d3.select("#wall").append("svg").attr("viewBox", `0 0 ${width} ${height}`)

// positions
const xScale = d3.scaleLinear().range([0,width])

let node = svg.selectAll(".node")

function update(data) {


    node = node.data(data, d=>d.id)
    node.exit().remove()
    node = node.enter().append("g").merge(node)
    node.append("image")
        .attr("x","-10")
        .attr("y","-10")
        .attr("width","20")
        .attr("height","20")
        .attr("href", d=>"./assets/data/SPRITE/"+d.name+".png")
    
    simulation.nodes(data)
    // simulation.force("x").x(d=>d._x)
    simulation.force("x").x(d=>xScale(d.stereotype))
    simulation.force("y").y(d=>d._y)
    simulation.alpha(1)
    simulation.restart()
}

d3.json("./assets/data/data-id.json").then(data=>{
    const xScaleDomain = data.map(d=>d.stereotype).sort()
    xScale.domain(xScaleDomain)
    data = data.map(d=>{
        const obj = {...d, _x: width/2, _y:height/2}
        return obj
    })
    update(data);

    setTimeout(()=>{
        console.log("timer") 
        update(data.slice(0,50))
    }, 5000)
})