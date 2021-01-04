var uniqueInOrder=function(iterable){
    if(typeof(iterable)==='string'){
        return iterable.split('').filter((elem,index)=>elem!==iterable[index-1])
    }else return iterable.filter((elem,index)=>elem!==iterable[index-1])
}




var uniqueInOrder=function(iterable){
    var result = []
    var last 

    for (var i =0; i<uterable.length; i++){
        if(iterable[i]!== last){
            result.push(last = iterable[i])
        }
    }
    return result
}