export {}

interface Eat {
  eat(food: string): void
}
interface Run {
  run(): void
}


// 单一接口
class Animal implements Eat {
  eat(food: string) {
    console.log(food)
  }
}


// 多个接口
class Dog implements Eat, Run {
  eat(food: string) {
    console.log(food)
  }
  run() {
    console.log('running')
  }
}

