function withdraw(clients, balances, client, amount){
    client=[];
  // amount =[];
  if(amount > balances) return -1;
   for(let i =0 ; i <= clients.length-1;i++){
    for(let j=0 ; j <= balances.length-1;j++){
            if(balances[i]< amount) {return -1}
             else if (balances[i]> amount){
               balances[j] -=amount;}
             
    }
     return balances;
   }
  
    return clients;
   }
