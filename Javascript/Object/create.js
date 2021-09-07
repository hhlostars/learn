const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
}

const me = Object.create(person);

console.log(me);
console.log(me.__proto__);

// father
function Shape() {
  this.x = 0;
  this.y = 0;
}

Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.log('Shape moved.');
}

// son 
function Rectangle() {
  Shape.call(this)
}

Rectangle.prototype = Object.create(Shape.prototype)
console.log(Rectangle.prototype);