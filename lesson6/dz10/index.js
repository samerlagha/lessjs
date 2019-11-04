function withdraw(clients, balances, client, amount){
    client=[];
  // amount =[];
   
   for(let i =0 ; i <= clients.length-1;i++){
    for(let j=0 ; j <= balances.length-1;j++){
             if(amount > balances[j]) return -1;
             else  balances[j] -=amount;
    }
         clients[i]= client;
     return balances;
   }
  
    return clients;
   }