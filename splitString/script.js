function solution(str){
    if(!str){
   return []
 }
 let arr = str.split('').map((ele,i,arr)=>{
 if(str.length % 2 === 0){
 if(i % 2 === 0){
   return ele+arr[i+1]
 } 
 }else{
 if(i % 2 === 0 && i !== str.length - 1){
   return ele+arr[i+1]
 }else if(i === str.length-1){
   return ele + '_'
 }
 }
 })
 .filter((ele)=>ele !== undefined)
 return arr
 }