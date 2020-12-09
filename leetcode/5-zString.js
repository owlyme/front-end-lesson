let s ="PAYPALISHIRING"
var convert = function(s, numRows) {
  if (!s.length || numRows <=1 || s.length <= numRows) return s

let cache = []
let cacheIndex = 0
let dir = 1;
let sLength = s.length;
let index = 0;

for (let i=0; i < numRows; i++) {
  cache[i] = []
}

while (index < sLength) {
  // 数据格式影响计算速度
  // cache[cacheIndex] = cache[cacheIndex] + s[index];
  cache[cacheIndex].push(s[index])
  cacheIndex += dir;
  if (cacheIndex === 0 || cacheIndex === numRows - 1) {
    dir = -dir
  }
  index++;
}

let res = ''
for (let i = 0 ; i < numRows; i++) {
  //   res += cache[i]
  res += cache[i].join('')
}
return res
};

let result = convert(s, row)
console.log(result)
