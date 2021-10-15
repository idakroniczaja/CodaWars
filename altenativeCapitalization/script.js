function capitalize(s){
    let finalArray = [];
    let case1 = s.split("").map((element, index) => {
      if(index % 2 === 0){
        return element.toUpperCase()
       }else{
        return element.toLowerCase()
       }
     }).join("")
    let case2 = s.split("").map((element, index) => {
      if(index % 2 !== 0){  
        return element.toUpperCase()
       }else{
        return element.toLowerCase()
       }
     }).join("")
     finalArray.push(case1, case2)
    return finalArray
  };