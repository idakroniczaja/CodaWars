function tribonacci(signature,n){
    if(n==0) return []
 
 let tribon = []
 
 for(let i=0;i<n;i++){
   tribon.push(signature[i])
 if(i>signature.length-1){
    tribon[i]=tribon[i-1]+tribon[i-2]+tribon[i-3]
 }}
 
 return tribon
 }


 function tribonacci(s,n){
    var arr = [];
    for(var i=0; i<n; i++) {
      arr.push((i<3) ? s[i] : arr[i-1]+arr[i-2]+arr[i-3]);
    }
    return arr;
  }