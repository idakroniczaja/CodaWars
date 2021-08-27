function duplicateCount(text){
    let arrayOfLetters = text.split('').map(e=>e.toLowerCase())
  
    let repetingLetters = [...arrayOfLetters].map(e=>e.toLowerCase())
    .filter((e,i,a)=>i!==a.indexOf(e))
    .filter((elem,ind,arr)=>ind===arr.indexOf(elem))
  
  return repetingLetters.length
  }