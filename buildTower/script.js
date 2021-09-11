function towerBuilder(nFloors) {
    let array = new Array(nFloors).fill()
     .map((eachArr,i)=>new Array(nFloors*2-1).fill()
     .map((element,index,arr)=>{
        if(index+1<=i*2+1){
        element='*'
        }else element = '.'
    return element
     })
     ).map((e,ind,arr) => {
         let newArray = e.join('').split('.')
         const tmp = newArray[0]
    newArray[0] = newArray[(newArray.length-1)/2]
    newArray[(newArray.length-1)/2] = tmp
    return newArray.join(' ')
    
     } )
    
    return array
    }