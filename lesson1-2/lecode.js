
var convert = function(s, numRows) {
  let cache = {}
  let middle = numRows -1;
  let index = 0;
  let len = s.length

  while (index < len) {
      console.log(index, middle)
      let offset = index - middle
      let abs = Math.abs(offset)
      if (!cache[abs]) cache[abs] = ''
      cache[abs] += s[index]

      if ( offset === 1) {
        middle = index
      }
      index ++;
  }

  console.log(cache)
  let res = ''
  for (let i = numRows -1 ; i>= 0; i--) {
      res += cache[i]
  }
  return res
};
const s = "PAYPALISHIRING"
const row = 3;
/**
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 */
// "PAHNAPLSIIGYIR"

console.log(convert(s, 3))
