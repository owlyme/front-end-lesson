const obj = {
  foo() {
    function bar() {
      console.log(this)
    }
    bar()
  }
}
obj.foo()
const fn = obj.foo

const obj1 = {
  foo() {
    const bar = () => {
      console.log(this)

    }
    bar()
  }
}
obj1.foo()
const fn1 = obj1.foo

...