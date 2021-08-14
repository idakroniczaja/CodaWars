function list(names){
    let arrayOfNames = [...names].map((object,i,arr) => {
      if(i>=arr.length-1 && arr.length>1){
        return `& ${object.name}`
      }else return object.name
    })
   
   
   
   return arrayOfNames.join(', ')
   .replace(/, ([^,]*)$/, ' $1')
   }