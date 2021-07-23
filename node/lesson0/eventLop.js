setTimeout(() => {
    console.log(1)
    Promise.resolve().then(() => {
        console.log(2)
    })
})

Promise.resolve().then(() => {
    console.log(3)
    setTimeout(() => {
        console.log(4)
    })
})

// 3 1 2 4