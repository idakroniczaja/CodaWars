function maskify(cc) {   
     let string1 = cc.slice(Math.max(cc.length -4, 1))    
     let string2 = cc.slice(0, cc.length-4).split("").map(each => each = "#").join("")    
     if(cc.length <= 4 ){    return cc    } else{    return string2+string1    } 
       } 


       function maskify(cc) {
               let string1 = "";    
               for(let i = 0; i < cc.length; i++) {    
                   if(i < cc.length - 4) {    
                       string1 = string1 + "#";    
                    } else {    
                        string1 = string1 + cc.charAt(i);    
                           };    
                        }    return string1;         
                    }