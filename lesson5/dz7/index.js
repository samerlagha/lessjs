function  increaser(a, index){
    //let  roz = index -a;
     if(parseInt(a) <=  parseInt(index)){
       //a = a+roz;
       a = index;
       //console.log(a);
       return a;
     } else if(a > index) {
       // console.log(a);
           return a;
       }
 }
 let result= increaser(5,12);
 console.log(result);