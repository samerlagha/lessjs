function getSum(num1,num2){

    let result=0;
 for ( num1=0; num1 <= num2;num1++){
  if (num1 % 2 !==0 ) continue;
  // sum= num1+num2;

  // return sum;
 
 console.log(result + ' + ' + num1 + ' = ' + (result += num1));
}
}
let resut=  getSum(0,0);

// function getSum(num1,num2){
//     if(num1 %2===0 && num2 % 2 ===0){
        
//       return num1+num2;
//     }
// }
//  let resut=  getSum(4,6);
//  console.log(resut);

//  function getSum(num1,num2){
//     if(num1 %2===0 ){
//         console.log(num1,num2);
//         return num1+num2;
//     }
// }
//  let resut=  getSum(10,6);
//  console.log(resut);