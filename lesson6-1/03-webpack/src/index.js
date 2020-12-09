import a from './module';
import b from  "../md.md";
import hmr from "./hmr"
import src from "./assets/test.png"
import "./index.css";

console.log(API_BASE)
console.log(a, b)


let elH2 = document.getElementById('xy')
let elImg = document.getElementById('bz')

elImg.src = src
if (module.hot) {
  module.hot.accept('./hmr.js', (e) => {
    // "这里需要手动处理热替换逻辑"
    console.log("这里需要手动处理热替换逻辑")
    console.log(e) // e 为路径
    elH2.innerHTML = hmr
  })

  module.hot.accept("./assets/test.png", () => {
    elImg.src = src
  })
}

