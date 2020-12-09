function sleep(bool) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (bool) {
        resolve('bool is ' + bool)
      } else {
        reject('bool is ' + bool)
      }

    }, 500)
  })
}

// let res = sleep(false)
//                     .catch(e => {
//                       console.log(e);
//                       return Promise.reject('reject error')
//                     })
//                     .catch(e => {
//                       console.log(2, e);
//                       return Promise.resolve('123')
//                     })
//                     .then(res => {
//                       console.log('then',res)
//                     })


let res = sleep(true)
                  .then(res => {
                    console.log(res)
                    return {
                      then() {
                        console.log("thenable")
                        return 'fn thenable'
                      }
                    }
                  })
                  .then()
                  .then(() => {
                    console.log(12313)
                  })

console.log(res)