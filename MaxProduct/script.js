function adjacentElementsProduct(inputArray) {
    let max = -Infinity;
    for (let i = 1; i < inputArray.length; i++) {
        max = Math.max(inputArray[i] * inputArray[i - 1], max);
    }

    return max;
}


function adjacentElementsProduct(array) {
    let answerArray = [];
    
    for (let i=0; i<array.length-1; i++){
      answerArray.push(array[i] * array[i+1]);
    }
    
    return Math.max(...answerArray);
  }


  function adjacentElementsProduct(a) {
    return Math.max(...a.map((x,i)=>x*a[i+1]).slice(0,-1))
  }