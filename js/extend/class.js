// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//     speak() {
//         console.log(this.name + 'make a sound')
//     }
// }
//
// class Dog extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     speak() {
//         console.log(this.name + 'bark')
//     }
// }
//
// const dog = new Dog('wangwang');
// dog.speak()

/**
 * 使用原型链继承弊端
 * 无法向父类构造函数传参 父类构造函数已被调用
 * 父类上的属性 会影响所有其他实例
 */

// function Animal(name) {
//     this.name = name
// }
// Animal.prototype.speak = function () {
//     console.log(this.name + 'make a sound')
// }
//
// function Dog() {
//
// }
//
// Dog.prototype = new Animal('xxx ')
//
// const dog = new Dog()
// //xxx make a sound
// speak()

/**
 * 构造函数继承弊端
 * 无法继承原型链上的方法
 *
 */
// function Animal(name) {
//     this.name = name
// }
//
// function Dog(name) {
//     Animal.call(this, name)
// }
// const dog = new Dog('wangwang')
// console.log(dog.name)

/**
 * 寄生组合继承
 */
function Animal(name) {
    this.name = name
}
Animal.prototype.speak = function () {
    console.log(this.name + 'make a sound')
}

function Dog(name) {
    Animal.call(this, name)
}

Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog
console.log(Dog.prototype)
const dog = new Dog('zxc ')
//xxx make a sound
dog.speak()


