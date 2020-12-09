export {}

const nums = [1,2,4]

const res = nums.find(i => i >= 2)

const sq = res * res

// 断言 方式1 as
const num1 = res as number
// 方式2 <> , 但是这回和jsx标签冲突
const num2 = <number>res