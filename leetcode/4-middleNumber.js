// 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数。
// 进阶：你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const sortArr = (nums1, nums2) => {
  let arr = []
  let n1 = null;
  let n2 = null

  do{
    if (n1 === null) n1 = nums1.shift();
    if (n2 === null) n2 = nums2.shift();

    if (n1 === undefined && n2 === undefined) {
      return arr
    } else if ( n1 === undefined || n2 === undefined) {
      return arr.concat(n1 === undefined ? n2 : n1 , nums1, nums2)
    }

    if (n1 === n2) {
      arr.push(n1, n2)
      n1 = null
      n2 = null
    } else if (n1 > n2) {
      arr.push(n2)
      n2 = null
    } else if (n1 < n2) {
      arr.push(n1)
      n1 = null
    }
  } while (true)
}

var findMedianSortedArrays = function(nums1, nums2) {
  // let arr = nums1.concat(nums2).sort((a, b) => a - b )

  let arr = sortArr(nums1, nums2)
  console.log(arr)
  let len = arr.length
  let index = 0
  if (len % 2) {
    index = (len - 1) / 2
    return arr[index]
  } else {
    index = len / 2
    return (arr[index] + arr[index-1]) / 2
  }
};

let n1 = [10, 11]
let n2 = [2, 7, 8, 9]
console.log(findMedianSortedArrays(n1,n2))
