function withdraw(clients, balances, client, amount){
    client=[];
  // amount =[];
  while(amount > balances) return -1;
   for(let i =0 ; i <= clients.length-1;i++){
    for(let j=0 ; j <= balances.length-1;j++){
             if(amount > balances[j]) return -1;
             else  balances[j] -=amount;
             return balances;
    }
        // clients[i]= client;
     //return clients;
   }
  
   }