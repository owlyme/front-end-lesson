let p = new  Promise((resolve,reject) => {
  setTimeout(() => {
    resolve("success")
    // reject('fail reason')
  }, 1000)
}).then().catch(e => {
  console.log('catch', e)
}).then(e => {
  console.log('then', e)
})

