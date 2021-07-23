'use strict';
const pkgB = require("pkg-b")

module.exports = pkgA;

function pkgA() {
    // TODO
    return "module pkgA " + pkgB()
}

console.log(pkgA())