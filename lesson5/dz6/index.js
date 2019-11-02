function getPrimes(num1,num2){
    nextPrime:
  for( let i =num1; i <=num2;i++){
   // if(i <1) continue;
   if(i>0){
    for (let j = 2; j < i; j++) { 
        if (i % j == 0) continue nextPrime; 
      }
      console.log(i);
  }
    }
  }
getPrimes(2,10);




 