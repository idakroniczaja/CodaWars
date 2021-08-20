function stockList(listOfArt, listOfCat){

    let filteredArray = listOfCat.map((eachLetter,i)=>{
         let filtered = listOfArt.filter(eachCode=>eachCode.charAt(0)===eachLetter)
    
         let sum = filtered.map(each=>each.split(' ')).reduce((acc, el) => acc.concat(el), [])
         .filter(eachElement=>!Number.isNaN(Number(eachElement)))
         .map(each=>Number(each))
         .reduce((acc,vall)=>acc+vall,0)
    
    
    
    
    
    if(filtered.length){
      return `(${eachLetter} : ${sum})`
    }else return `(${eachLetter} : 0)`
    })
    
    if(filteredArray.every(string=>string.slice(-3) === ' 0)')){
      return ''
    }else return filteredArray.join(' - ')
    }