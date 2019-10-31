const m =10;
const n =20;
let result =0;
    
while(true){
if(m % 2===0 && m % 4 !==0) result += m;
     
if(m % 4===0) result *=m;
if(m % 3===0) result -=m;
if(m % 5===0) console.log(m);;

    break;
    }
console.log('Result: ' + result);