const m =20;
const n =50;
let result =0;
    
while(m<=n){
if(m % 2===0 && m % 4 !==0) result += m;
     
if(m % 4===0) result *=m;
if(m % 3===0) result -=m;
if(m % 5===0 && n %5===0) console.log(m,n);

    break;
    }
console.log('Result: ' + result);