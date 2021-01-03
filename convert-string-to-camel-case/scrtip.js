function toCamelCase(str){
    let array =  str.split(/[_-]+/)
    let shiftArray = array.shift()
    let mapArray = array.map(elem=>elem.charAt(0).toUpperCase() + elem.slice(1).toLowerCase()).join('')
    return shiftArray + mapArray
    }