function squareArray(arr){
    
    ret= [];
 
     if(!Array.isArray(arr)) return null;
 
     for (let i = 0 ; i = arr.length; i++) {
         ret.push(arr[i] * arr[i]);
     }
 
     return ret;     
 }