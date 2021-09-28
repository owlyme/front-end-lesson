const arr = [4, 2, 1, 0]
let count = 0;

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}


function bubbleSort(arr) {
    // let temp = null
    // for(let i=0; i < arr.length; i++) {
    //     temp = arr[i]
    //     for(let j = i+1; j < arr.length; j++) {
    //         count ++ 
    //         if (temp > arr[j]) {

    //             arr[i] = arr[j]
    //             arr[j] = temp
    //             i--
    //            break
    //         }
    //     }
    // }

    var numElements = arr.length;

    for (var outer = numElements; outer >= 2; --outer) {
        for (var inner = 0; inner <= outer - 1; ++inner) {
            count++
            if (arr[inner] > arr[inner + 1]) {
                swap(arr, inner, inner+1);
            }
        }
    }

}

bubbleSort(arr)

console.log(arr, count)