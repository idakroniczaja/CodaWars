function findOutlier(integers){

    
    let filteredArr = integers.filter((ele) => ele % 2 === 0)
    if(filteredArr.length === integers.length-1){
      return integers.find((ele) => ele % 2 !== 0)
    }else{
      return integers.find((ele) => ele % 2 === 0)
    }
    
    }