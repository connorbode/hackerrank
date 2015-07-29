module.exports = function (input) {
  var rows = input.split('\n');
  var rows = rows.map(function (row) {
    return row.split(' ');
  });

  var meta = rows.splice(0, 1)[0];
  var numFeatures = parseInt(meta[0]);
  var numRows = parseInt(meta[1]);
  var trainingRows = rows.splice(0, numRows);

  var numTestRows = parseInt(rows.splice(0, 1)[0][0]);
  var testRows = rows;

  console.log('num features', numFeatures);
  console.log('num rows', numRows);
  console.log('training rows', trainingRows);
  console.log('num test rows', numTestRows);
  console.log('test rows', testRows);
};