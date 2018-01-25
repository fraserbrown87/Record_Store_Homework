
var Record_Collector = require('./record_collector');
var Record = require('./record.js');


var Store = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.records = [];
}

Store.prototype.addRecord = function (record) {
  this.records.push(record);
};

Store.prototype.listInventory = function(){
  // console.log(this.records);
  return this.records;
}

Store.prototype.sellRecord = function (record) {
  this.balance += record.price;
};

Store.prototype.financials = function () {
  let totalValue = 0;
  this.records.forEach(function(record){
    totalValue += record.price;
  })
  return `Balance: ${this.balance}, Albums Value: ${totalValue}`;
};

Store.prototype.sameGenres = function (genre) {
  var total = this.records.filter(function(record){
    return record.genre === genre;
    // if(record.genre === genre) return true;
  });
  return total.length;
};

Store.prototype.sellRecord = function (recordToBuy, customer) {
  this.records = this.records.filter(record => record !== recordToBuy);
  console.log(this.records);
  customer.recordCollection.push(recordToBuy);
  console.log(customer.recordCollection);
};

module.exports = Store;
