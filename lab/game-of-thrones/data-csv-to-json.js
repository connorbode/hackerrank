var fs = require('fs');
var path = require('path');

var csvPath = path.join(__dirname, 'data.csv');
var csv = fs.readFileSync(csvPath);
var rows = csv.split('\n');
var data = rows.map(function (row) {
  var split = row.split(',');
  return split.map(function (s) {
    return parseFloat(s);
  });
});

console.log(data);