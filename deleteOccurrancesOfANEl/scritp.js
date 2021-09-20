function deleteNth(arr,n){
    return arr.filter((ele, i) => arr.slice(0, i).filter(e => e == ele).length < n)
   }