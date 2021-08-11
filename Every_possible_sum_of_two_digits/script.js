let someNum = 24981700

function digits(num){
 
let firstArray = String(num).split('')
.map((eachString,i,arr)=>eachString.repeat(arr.length-(i+1)))
.filter(each=>each.length>0)
.map(eachStr=>eachStr.split('').map(e=>Number(e)))



let secondArray = []

for(let i = 0; i<String(num).length; i++){
 
     secondArray.push(String(num).slice(i+1)) 
  

}

let finalSecondArray = secondArray
.map(eachStr=>String(eachStr).split('').map(each=>Number(each)))

let flatArr = [].concat(...finalSecondArray)

//console.log(flatArr[index])

 return [].concat(...firstArray).map((number,index,array)=>{
  console.log(flatArr[index])
   return number+flatArr[index]
 })
}

digits(someNum)

//24981700
//Expected: [6, 11, 10, 3, 9, 2, 2, 13, 12, 5, 11, 4, 4, 17, 10, 16, 9, 9, 9, 15, 8, 8, 8, 1, 1, 7, 7, 0], 
//instead got: [6, 11, 10, 3, 9, 2, 2, 13, 12, 5, 11, 4, 4, 17, 10, 16, 9, 9, 9, 15, 8, 8, 8, 1, 1, 7, 7, NaN]//

var digits=n=>[...n+=''].reduce((s,a,i)=>s=s.concat([...n].slice(i+1).map(b=>+a+ +b)),[])