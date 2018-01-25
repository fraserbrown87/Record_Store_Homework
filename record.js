var Record = function(name, title, genre, price){
  this.name = name;
  this.title = title;
  this.genre = genre;
  this.price = price;

}

Record.prototype.printDetails = function () {
  return `Artist: ${this.name}, Album: ${this.title}, Genre: ${this.genre}, Price: £${this.price}`

};

module.exports = Record;
