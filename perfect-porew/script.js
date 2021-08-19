var isPP = function(n){
    let numArray = []
    
    if(n>100){
      for(let i = 1 ; i <= 300 ; i++){
       numArray.push(i)
    }
  }else{
   for(let i = 1 ; i <n ; i++){
       numArray.push(i)
    }
  }
  
  
    let filteredNumbers = numArray.map((element, index, array) =>  {
    return array.filter((e,i)=>{
      return e**element===n
    })
    .map((elem)=>[elem,index+1])
    })
  .filter(el=>el.length)
  
  
  
  if(!filteredNumbers.length){
    return null
  } else return filteredNumbers
  .find((el,ind)=>ind===0)
  .reduce((acc, el) => acc.concat(el), [])
  
  }