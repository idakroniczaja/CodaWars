function rot13(message){
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
     let alphaArray = alphabet.split('')
     let messageArray = message.split('')
   
      
   
   return messageArray.map((e,i,a)=>{
     if(e.match(/[a-zA-Z]/)){
    
      let indexOfelement = alphaArray.findIndex(elem=>elem.toLowerCase() ===e.toLowerCase())+1
   
   function calculate13 (index){
     if (index - 13<1){
       return alphaArray.length-(13-index)
     }else{ 
       return index - 13
       }
   }
   
      let rot13el=alphaArray.find((elem,ind,arr)=>elem.toLowerCase()===arr[calculate13 (indexOfelement)-1].toLowerCase())
     
        if(message[i] === message[i].toUpperCase()){
          e=rot13el.toUpperCase()
        }else{
          e=rot13el
        }
   
        return e
     }else return e
   })
   .join('')
   }