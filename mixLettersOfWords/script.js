function someWords(one, two, three){
    let arrayOfWords=[one, two, three]
     let letters=''
    arrayOfWords.map((word,index)=>{
      for(let i in word){
        letters+=word[i]
      }
    })
    return letters
    }
    
    someWords('addda','bbddddd','cddddc')