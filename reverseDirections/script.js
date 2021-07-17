function solve(arr){
    return arr.reverse()
    .map((elem, index, arr) => {
       if(index===0) return elem.replace(/Left|Right/, "Begin")
       else if(arr[index-1].includes("Right"))
       {
         return elem.replace(/Left|Right|Begin/, "Left")
       }
       
       else return elem.replace(/Left|Right|Begin/, "Right")
     })
}