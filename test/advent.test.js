var assert = require('assert');
var dayOne = require('../codeAdvent');

describe('Day One', function() {

  it('should return 3 from 1122', function() {
    assert.equal(3, codeAdvent.dayOne(1122));
  });

  it('should return 4 from 1111', function() {
    assert.equal(4, codeAdvent.dayOne(1111));
  });

  it('should return 3 from 1234', function() {
    assert.equal(0, codeAdvent.dayOne(1234));
  });

  it('should return 3 from 91212129', function() {
    assert.equal(9, codeAdvent.dayOne(91212129));
  });

});
