var reverse = function(x) {
    if (x < -2147483648 || x > 2147483647) {
        return 0;
    }

    let ing = false
    if (x < 0) {
        x = -x
        ing = true
    }

    let str = String(x || 0)
    let len = str.length
    let res = ''

    while (len > 0) {
        res += str[len - 1];
        len--;
    }
    let n = ing ? Number(res) * -1 : Number(res)
    if (n < -2147483648 || n > 2147483647) {
        return 0;
    }

    return n
};

console.log(reverse(1534236469))