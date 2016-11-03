var fs = require('fs');
var parser = require('./src/parser.js');
var content = fs.readFileSync('./test.dct', 'binary');
var assert = require('assert');

describe('convert ', function () {
  var staging;
  var correct = '༄༅། །གྲུབ་ཐོབ་བརྒྱད་ཅུ་རྩ་བཞིའི་ལོ་རྒྱུས་སློབ་དཔོན་མི་འཇིགས་པ་སྦྱིན་པ་དཔལ་གྱིས་མཛད་པ་བཞུགས་སོ། །';
  it('convert check with html tag', function () {
    var data = parser.parse(content.toString());
    data = parser.JSONToHTML(data);
    staging = data;
    var result = data.match(correct);
    assert.equal(result, correct);
  });
  it('remove html tag', function () {
    var result = parser.HTMLtoText(staging).replace(/\n/g, '');
    staging = result;
    assert.equal(result, correct);
  });
});