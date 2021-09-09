function pyramid(n) {
    if(n === 0) return []
      
      return new Array(n).fill()
      .map((e,i)=>e=new Array(i+1).fill(1))
    }