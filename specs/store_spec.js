var assert = require('assert');
var Store = require('../store.js');
var Record = require('../record.js');
var Record_Collector = require('../record_collector.js');



describe('Store', function(){
  var store;
  var record1;
  var record2;
  var record3;
  var record4;
  var collector;

  beforeEach(function(){
    store = new Store("CodeClan Records", "Edinburgh", 1000);
    record1 = new Record("The 44s", "The Haunted Fairground", "Ska Punk", 15);
    record2 = new Record("Jamie T", "Kings and Queens", "Indie", 10);
    record3 = new Record("Operation Ivy", "Energy", "Ska Punk", 12);
    record4 = new Record("Daft Punk", "Discovery", "Dance", 17);
    collector = new Record_Collector("Bob", 100);

  })

  it('it should have a name', function(){
    assert.strictEqual(store.name, "CodeClan Records");
  })

  it("it should have city", function(){
    assert.strictEqual(store.city, "Edinburgh");
  })

  it('it should have balance', function(){
    assert.strictEqual(store.balance, 1000);
  })

  it('records should start empty', function(){
    assert.strictEqual(store.records.length, 0);
  })

  it('store should have records', function(){
    store.addRecord(record1);
    store.addRecord(record2);
    assert.strictEqual(store.records.length, 2);
    })

  it('can list inventory', function(){
    store.addRecord(record1);
    store.addRecord(record2);
    assert.deepStrictEqual(store.listInventory(), [record1, record2]);
  })

  it('can store can sell record', function(){
    store.addRecord(record1);
    store.sellRecord(record1);
    assert.strictEqual(store.balance, 1015);
  })

  it('can return the financial situ of the store', function(){
    store.addRecord(record1);
    store.addRecord(record2);
    store.addRecord(record3);
    store.addRecord(record4);
    assert.strictEqual(store.financials(), "Balance: 1000, Albums Value: 54" )
  })

  it('can view all same genres', function(){
    store.addRecord(record1);
    store.addRecord(record2);
    store.addRecord(record3);
    store.addRecord(record4);
    assert.strictEqual(store.sameGenres("Ska Punk"), 2);
  })

  it('can sell record from store', function(){
    store.addRecord(record1);
    store.addRecord(record2);
    store.addRecord(record3);
    store.addRecord(record4);
    store.sellRecord(record1, collector);
    assert.strictEqual(collector.recordCollection.length, 1);
    assert.strictEqual(store.inventory.length, 3);
  })



})
