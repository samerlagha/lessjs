const m = 10;
const n = 20;
let result = 1;

<<<<<<< HEAD
for (let i = m; i <= n; i++){
    if (!(i % 2)) continue;
    console.log(result + ' * ' + i + ' = ' + (result *= i));
}
=======
do{
   
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
>>>>>>> 3b4ac2697aac84661c34fb40070cbffd10fb9987
