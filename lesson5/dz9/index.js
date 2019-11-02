function  findDivCount(a, b, n){

    for ( i = 0, i = a; i <= b; i++) {
    
    if (i % n !==0){
        return 0;
    } 
      
        if (i % n ===0){
        n =i;
    }  
       }
        return n;
    }
    