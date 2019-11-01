const m = 10;
const n = 20;
let  result = 1;

do{
   if (!(i % 2)) continue;
     if(m % 2 === 1){
        result *=m;
     }
     m++;
} while(m <= n);
console.log('Result: '+ result);
// const m = 10;
// const n = 20;
// let result = 1;

// for (let i = m; i <= n; i++){
//     if (!(i % 2)) continue;
//     console.log(result + ' * ' + i + ' = ' + (result *= i));
// }
