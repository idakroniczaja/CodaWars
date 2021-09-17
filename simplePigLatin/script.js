function pigIt(str){
    let arr1 = str.split(' ')
    return arr1.map((ele,i,arr) => {
    if(ele.match(/[a-zA-Z]/g)){
    let newArr = ele.split('')
    // console.log(newArr)
     let firstLetter = newArr.shift()
     newArr.push(`${firstLetter}ay`)
     return newArr.join('')
    }else return ele
    }).join(' ')
    
    }