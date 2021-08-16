multiplicationTable = function(size) {
    let arrayOfArrays = Array(size)
   
   let final = [...arrayOfArrays].map(each=> {
    each = []
   for(i=1;i<=size;i++){
    each.push(i)
   }
    return each
   })
   
   return final.map((eachArray,index)=>{
     return eachArray.map(number=>number*(index+1))
   })
   }