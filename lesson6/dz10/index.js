function withdraw(clients, balances, client, amount){
    // client=[];
   // amount =[];
   //while(amount[k] > balances[j]) return -1;
    for(let i =0 ; i <= clients.length-1;i++){
     for(let j=0 ; j <= balances.length-1;j++){
        for(let k=0 ;k <=amount.length-1;k++){
              if( amount> balances) return -1;
              balances[j] -=amount[k];
              return balances;
              }
              
     }
         // clients[i]= client;
      return clients;
    }
   
    }