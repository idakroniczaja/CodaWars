function findOutlier(integers){
    let evenNums = integers.filter(e=>e % 2 === 0)
   if(evenNums.length===integers.length-1){
     return integers.find(e=>e % 2 !== 0)
   }else return integers.find(e=>e % 2 === 0)
   }