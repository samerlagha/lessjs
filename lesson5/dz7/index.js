function  increaser(a, index){
    let  roz = index -a;
     if(a <= index){
       a = a+roz;
       return a;
     } else return a;
 }
 
  let res =increaser(6,5);
  console.log(res);