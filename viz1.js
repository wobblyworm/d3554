//Width and height
var w = 500;
var h = 100;
var barPadding = 1;

var db = [[5, 23, 75], [10, 14, 34], [13, 67, 23], [19, 10, 65],
[21, 42, 29], [25, 25, 25], [22, 90, 30], [18, 57, 17],
[15, 25, 35], [13, 26, 39], [11, 17, 85], [12, 36, 24],
[15, 60, 45], [20, 41, 11], [18, 77, 33], [17, 85, 55],
[16, 23, 44], [18, 35, 23], [23, 55, 15], [25, 45, 100]];

var dbH = [],
    dbW = [],
    dbO = [];

for (var i = 0; i < db.length; i++) {
    //console.log(db[i][0] + ', ' + db[i][1] + ', ' + db[i][2]);
    dbH.push(db[i][0]);
    dbW.push(db[i][1]);
    dbO.push(db[i][2]);
}

//Create SVG element
var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

svg.selectAll("rect")
    .data(dbH)
    .enter()
    .append("rect")
    .attr("x", function (d, i) {
        return i * (w / dbH.length);
    })
    .attr("y", function (d) {
        return h - (d * 4);
    })
    .attr("width", w / dbH.length - barPadding)
    .attr("height", function (d) {
        return d * 4;
    })
    .attr("fill", function (d) {
        return "rgb(0, 0, " + Math.round(d * 10) + ")";
    });

svg.selectAll("text")
    .data(dbH)
    .enter()
    .append("text")
    .text(function (d) {
        return d;
    })
    .attr("text-anchor", "middle")
    .attr("x", function (d, i) {
        return i * (w / dbH.length) + (w / dbH.length - barPadding) / 2;
    })
    .attr("y", function (d) {
        return h - (d * 4) + 14;
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "white");

d3.selectAll('svg', 'rect').data(dbO)
