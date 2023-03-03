https://www.loom.com/share/858c7a26bef64d6bb63b60dc57af8fb7

function merge(left, right) {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    return [ ...arr, ...left, ...right ]
}

  function mergeSort(array) {
    const half = array.length / 2
    
    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
  }

 

  function median(sortedArr) {
    let half = Math.ceil (sortedArr.length/2)
    if(half % 2 != 0) {
        return (sortedArr[half-1] + sortedArr[half]) /2
    }
    return sortedArr [half -1]
  }

  let sortedArr = mergeSort([5, 7, 2, 4, 9, 6])
  console.log(sortedArr);
  let answer = median(sortedArr);
  console.log(answer);

  console.log(median(mergeSort([5, 7, 10, 2, 4, 9, 6])))