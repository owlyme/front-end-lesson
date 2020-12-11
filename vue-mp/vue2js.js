const compiler = require('vue-template-compiler')
const fs = require('fs')

// var content = fs.readFileSync('x.vue', 'utf8');


let res = compiler.compile('<div v-test></div>', {
  directives: {
    test(node, directiveMeta) {
      console.log(12313, node)
        // transform node based on directiveMeta
    }
  }
})


console.log(res)