function  increaser(a, index){
  let  roz = index -a;
   if(a <=  index){
     roz = a+roz;
   
     //return roz;
   } else if(a > index) {
           roz= a;
       //  return a;
     }
     return roz;
}