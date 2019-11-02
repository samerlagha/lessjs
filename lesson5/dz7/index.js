function  increaser(a, index){
    let  roz = index -a;
     if(a <= index){
       a = a+roz;
       console.log(a);
       return a;
     } else if(a>index) {
        console.log(a);
           return a;
       }
 }
 
  increaser(7,5);