// import ceatePageA from "./a"
// import ceatePageB from "./b"


window.addEventListener('hashchange', (e) => {
  console.log(e)

  import(/* webpackChunkName: "bpage" */ './b').then((esm) => {
    console.log(esm.default)
  })



})

setTimeout(() => {
  import(/* webpackChunkName: "apage" */ './a').then((esm) => {
    console.log(esm.default)
    esm.default()
  })
}, 3000)