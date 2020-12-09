class Person {
  static wife = 'baozhu'
  static cannotGetName () {
    console.log(this, this.name)
  }
  constructor(name) {
    this.name = name
  }

  printName() {
    console.log(this.name)
  }

}

console.log(typeof Person)
let xy = new Person('xuyuan')
console.log(typeof xy)
console.log(xy.__proto__)
console.log(xy)
console.log(xy.name)

// console.log(xy.cannotGetName()) // TypeError: xy.cannotGetName is not a function
console.log(Person.cannotGetName())