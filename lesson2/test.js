const debounce = (fn,  delay)  => {
  let timer = null
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
    }, delay)
  }
}


const throlle = (fn,  delay)  => {
  let timer = null
  let prevTime = Date.now()
  return () => {
    let currTime = Date.now()
    let leftTime = currTime - prevTime
    clearTimeout(timer)
    if (leftTime >= delay) {
      fn()
      prevTime = currTime
    } else {
      timer = setTimeout(() => {
        fn()
      }, leftTime)
    }
  }
}