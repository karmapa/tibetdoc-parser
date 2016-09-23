var fs = require('fs');
var parser = require('./src/parse.js');
var content = fs.readFileSync('./test.dct', 'binary');
var assert = require('assert');

describe('convert', function () {
  it('convert check', function () {
    var data = parser.parse(content.toString());
    data = parser.JSONToHTML(data);
    var correct = '༄༅། །གྲུབ་ཐོབ་བརྒྱད་ཅུ་རྩ་བཞིའི་ལོ་རྒྱུས་སློབ་དཔོན་མི་འཇིགས་པ་སྦྱིན་པ་དཔལ་གྱིས་མཛད་པ་བཞུགས་སོ། །';
    var result = data.match(correct);
    console.log(result);
    assert.equal(result, correct);
  });
});