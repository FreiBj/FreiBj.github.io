const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    hamburger.classList.toggle("toggle");
});

var fills;

// Adapt the DNA helix to smaller screens
if (window.innerWidth >= 1380) {
    var fills = ['#012732', '#ffffff', '#a8acb2', '#ed7d31'],
    h = 150,
    w = 700,

    numX = 30,
    numY = 30,
    speed = 0.02,
    torsion = 0.2,
    x = d3.scale.linear().range([10, w - 10]),
    y = d3.scale.linear().range([h - 10, 10]),
    z = d3.scale.linear().range([10, 2]);

} else if (window.innerWidth < 1380) {
    var fills = ['#012732', '#ffffff', '#a8acb2', '#ed7d31'],
    h = 150,
    w = 300,

    numX = 15,
    numY = 15,
    speed = 0.02,
    torsion = 0.2,
    x = d3.scale.linear().range([10, w - 10]),
    y = d3.scale.linear().range([h - 10, 10]),
    z = d3.scale.linear().range([10, 2]);
}

var svg;
/*Colors for the small balls, speed and width and height*/
// var fills = ['#012732', '#ffffff', '#a8acb2', '#ed7d31'],
//     h = 150,
//     w = 700,

//     numX = 30,
//     numY = 30,
//     speed = 0.02,
//     torsion = 0.2,
//     x = d3.scale.linear().range([10, w - 10]),
//     y = d3.scale.linear().range([h - 10, 10]),
//     z = d3.scale.linear().range([10, 2]);

/*Choose class, id or tag for the helix to be placed in -- was .dna-helix*/
var svg = d3.select(".dna-helix")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .attr("style", "transform:rotate(-30deg); overflow:visible;")

/*Background color, move with mouse*/
svg.append("rect")
    .attr("width", w)
    .attr("height", h)
    .attr("fill-opacity", 0)
// .on("mousemove", function () { torsion = 0.5 * d3.mouse(this)[0] / w; });

var container = svg.append("g");

var counter = 0;
function generateData() {
    counter++;
    var data = d3.range(numX).map(function (d) {
        var t = d * torsion - speed * counter;
        return [
            {
                x: d,
                y: Math.cos(t),
                z: Math.sin(t)
            },
            {
                x: d,
                y: Math.cos(t - Math.PI),
                z: Math.sin(t - Math.PI)
            }
        ]
    });

    var flat = _.flatten(data);
    x.domain(d3.extent(flat, function (d) { return d.x }));
    y.domain(d3.extent(flat, function (d) { return d.y }));
    z.domain(d3.extent(flat, function (d) { return d.z }));

    return data
}

function draw() {
    var cont = container.selectAll("g").data(generateData());
    cont.exit().remove();

    var enter = cont.enter()
        .append("g")
        .each(function (d, index) {

            d3.select(this)
                .selectAll("circle")
                .data(d)
                .enter()
                .append("circle")
                .attr("fill", "black");

            d3.select(this).append('line')
                .attr("stroke", function (d, i) { return fills[index % 7] })
                .attr("stroke-width", 2)
        });

    cont.each(function (d, index) {

        var inverted = (d[0].y < d[1].y) ? 1 : -1;

        d3.select(this)
            .selectAll("circle")
            .data(d)
            .attr("cx", function (d) { return x(d.x) })
            .attr("cy", function (d) { return y(d.y) })
            .attr("r", function (d) { return z(d.z) })
            .attr("fill-opacity", function (d) { return z(d.z) / 10 })
            .attr("fill", function (d, i) { return fills[index % 7]; });

        d3.select(this)
            .select('line')
            .attr("x2", x(d[0].x))
            .attr("x1", x(d[0].x))
            .attr("y2", y(d[0].y) - inverted * z(d[0].z))
            .attr("y1", y(d[1].y) + inverted * z(d[1].z))
            .attr("opacity", 0.3 * inverted * (d[1].y - d[0].y))
    })
}

setInterval(draw, 25);