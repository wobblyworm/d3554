//Width and height
var w = 500,
    h = 250 + 20,
    barPadding = 1,
    zoom = [1, .33, .67],
    sortVar = 0,
    zoomFactor = 0;

var db = [[5, 23, 75], [10, 14, 34], [13, 67, 23], [19, 10, 65],
[21, 42, 29], [25, 25, 25], [22, 90, 30], [18, 57, 17],
[15, 25, 35], [13, 26, 39], [11, 17, 85], [12, 36, 24],
[15, 60, 45], [20, 41, 11], [18, 77, 33], [17, 85, 55],
[16, 23, 44], [18, 35, 23], [23, 55, 15], [25, 45, 100]];

var local = d3.local;

// sortVar = (sortVar + 1) % 3
// zoomFactor = (zoomFactor + 1) % 3

console.log('max of first triple: ' + d3.max(db[0]))
console.log('max of sortVar: ' + sortVar +
    ', max: ' + d3.max(db, db => db[sortVar]))
//console.log(db.sort(d3.ascending))//((db) => db[0])))


// db.sort(function (a, b) {
//     return d3.ascending(a[sortVar], b[sortVar])
// })

var yScale = d3.scaleLinear(db)
    .domain([0, d3.max(db, (db) => db[0])])
    .range([0, (h-20) * zoom[zoomFactor]]);

var xScale = d3.scaleLinear()
    .domain([0, d3.max(db, (db) => db[1])])
    .range([0, (w/db.length - barPadding)]);

// var widthScale = d3.scaleBand()
//     .domain((db) => db[1])
//     .paddingInner(.1)
//     .paddingOuter(.1)
//     .range([0, w / db.length]);

var opacityScale = d3.scaleLinear()
    .domain([d3.min(db, (db) => db[2]), d3.max(db, (db) => db[2])])
    .range([.25, 1]);

//Create SVG element
var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

svg.selectAll("rect").data(db)
    .enter()
    .append("rect")
    .attr("x", function (d,i) {
        return i * (w / db.length)
    })
    .attr("y", function (d) {
        return h - yScale(d[0])
    })
    .attr("width", function(d){
        return xScale(d[1])
    })
    .attr("height", function (d) {
        return yScale(d[0]);
    })
    .attr("fill", "rgb(0,0,200)")
    .attr('opacity', function (d) {
        return opacityScale(d[2]);
    })

svg.selectAll("text").data(db)
    .enter()
    .append("text")
    .text(function (d) {
        return d[sortVar];
    })
    .attr("text-anchor", "left")
    // .attr("x", function (d, i) {
    //     return i * (w / dbH.length);
    // })
    .attr("x", function (d, i) {
        return i * (w / db.length)
    })
    .attr("y", function (d) {
        return h - yScale(d[0]) -2;
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "red");

svg.select

// console.log('---')
// console.log('max of first triple: ' + d3.max(db[0]))
// console.log('max of first variable: ' + d3.max(db, (db) => db[0]))
// console.log('zoom: ' + zoom[zoomFactor])
// console.log('sortVar: ' + sortVar);
