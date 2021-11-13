// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//SOLUTION

function countPositivesSumNegatives(input) {
    if(!input || input.length === 0){
      return []
    } else{
      let positiveNum = input.filter((ele) => ele > 0).length 
    let negativeNum = input.filter((ele) => ele < 0).reduce((acc,val) => acc + val, 0)
      return [positiveNum, negativeNum]
    } 
  }