function task() {
  setTimeout(() => console.log(1), 0)
  setTimeout(() => console.log(2), 100)

  Promise.resolve().then(() => {
    setTimeout(() => console.log(3), 0)
    setTimeout(() => console.log(4), 100)
    console.log(5)
    Promise.resolve().then(() => {
      console.log(6)
    })
  }).then(() => {
    setTimeout(() => console.log(7), 100)
    console.log(8)
  })

  console.log(9)
}
// task()
// 9 - 5 - 6 - 8 - 1 - 3- 2 - 4 - 7

function foo () {
  var  foo = 100;
  async function main () {
    foo = foo + await Promise.resolve(10)
    console.log('main', foo)
  }

  main()
  foo++

  console.log('global', foo)
}
