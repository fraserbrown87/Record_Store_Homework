var assert = require('assert');
var Record = require('../record.js');

describe('Record', function(){
  var record1;

  beforeEach(function() {
    record1 = new Record("The 44s", "The Haunted Fairground", "Jazzcore", 15);
  })

  it('it should have a name', function(){
    assert.strictEqual(record1.name, "The 44s");
  });

  it('it should have a total', function(){
    assert.strictEqual(record1.title, "The Haunted Fairground");
  });

  it('it should have a genre', function(){
    assert.strictEqual(record1.genre, "Jazzcore");
  });

  it('it should have a price', function(){
    assert.strictEqual(record1.price, 15);
  });

  it('can print record details as a string', function() {
    assert.strictEqual(record1.printDetails(), "Artist: The 44s, Album: The Haunted Fairground, Genre: Jazzcore, Price: £15")
  })


})
