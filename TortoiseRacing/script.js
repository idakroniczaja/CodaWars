function race(v1, v2, g) {
    if(v1 >= v2){
   return null
 }else{
     let time = g * 3600 / (v2 - v1);
     let hours = Math.floor((time/3600))
     let minutes =  Math.floor((time % 3600) / 60)
     let seconds = Math.floor(time % 60)
      return [hours, minutes, seconds]
 }
 }