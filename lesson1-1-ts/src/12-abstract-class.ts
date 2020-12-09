export {}

abstract class Animal {
  eat(food: string):void {
    console.log(`eat ${food}`)
  }
  // error 抽象类的方法不要函数体
  // abstract run(distance: number): void {

  // }

  abstract run(distance: number): void
}

class Dog extends Animal {
  run(distance: number): void {
    throw new Error("Method not implemented.")
  }
}