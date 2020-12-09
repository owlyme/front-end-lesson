export {};

class Person {
  public name: string
  private age: number
  protected readonly gender: boolean

  constructor (name: string, age:number) {
    this.name = name
    this.age = age
  }

  sayHi(msg: string) {
    console.log(`${this.name} say ${msg}`)
  }
}

class Student extends Person {
  constructor(name: string, age: number) {
    super(name, age)
    this.gender = true
  }
}

const tom = new Person('tom', 18)
// console.log(tom.age) // private
// console.log(tom.gender) // protected