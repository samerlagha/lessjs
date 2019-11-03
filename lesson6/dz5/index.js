function squareArray(arr){
    
    ret= [];
 
     if(!Array.isArray(arr)) return 0;
 
     for (let i = 0 ; i = arr.length; i++) {
         ret.push(arr[i] * arr[i]);
     }
 
     return ret;     
 }