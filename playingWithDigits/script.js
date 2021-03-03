function digPow(n, p){
    let eachNumber = (n.toString().split('').map((elem, index)=> Math.pow(Number(elem), (p+index))));
    let k = eachNumber.reduce((a,b)=>a+b,0)/n;
    
    if (k>1 && Number.isInteger(k)){
    return k
    }else return -1
    }
    
    digPow(94, 3)