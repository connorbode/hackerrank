var solve = require('./index');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('predicting office space', function () {
  it('should work', function (done) {
    var sampleOutput = [180.38,
      1312.07,
      440.13,
      343.72
    ];
    var fs = require('fs');
    var path = require('path');
    var inputPath = path.join(__dirname, 'sample-input');
    var sampleInput = fs.readFileSync(inputPath, { encoding: 'utf8' });
    expect(solve(sampleInput)).to.equal(sampleOutput);
  });
});