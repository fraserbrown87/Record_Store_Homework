var assert = require('assert');
var Record_Collector = require('../record_collector');

describe('Record_Collector', function(){
  var collector;
  var store;

  beforeEach(function(){
    collector = new Record_Collector("Bob", 100);
  })

  it('collector should have a name', function(){
    assert.strictEqual(collector.name, "Bob");
  })

  it('Collector should have cash', function(){
    assert.strictEqual(collector.cash, 100);
  })

  it('Collector should start with no albums', function(){
    assert.strictEqual(collector.recordCollection.length, 0);
  })

  
})
