// function withdraw(clients, balances, client, amount){
//     client=[];
//   // amount =[];
//   if(balances[i]< amount) return -1;
//    for(let i =0 ; i <= clients.length-1;i++){
//     for(let j=0 ; j <= balances.length-1;j++){
//             // if(amount > balances[j]) return -1;
//                balances[j] -=amount;
//                if(balances[i]< amount) return -1;
//     }
//          clients[i]= client;
//      return balances;
//    }
  
//     return clients;
//    }
// Try edit message
function withdraw(clients, balances, client, amount){
    client=[];
  // amount =[];
  //if(balances[j]< amount) return -1;
   
   for(let i =0 ; i <= clients.length-1;i++){
    for(let j=0 ; j <= balances.length-1;j++){
            // if(amount > balances[j]) return -1;
              balances= balances[j] -amount;
              if(balances<0) return -1;
               return balances;
    }
         //clients[i]= client;
    // return balances;
   }
  
    return -1;
   }