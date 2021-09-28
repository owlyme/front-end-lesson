const path = require('path');
// var、this、window、global、commonjs、commonjs2、amd、amd-require、umd
const t = "umd"
module.exports = {
    mode: "development",
    
    entry: './index.js',
    output: {
       
        libraryTarget: t,
        path: path.resolve(__dirname, 'dist'),
        filename: t + '.m.bundle.js',
    }
}