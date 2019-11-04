function withdraw(clients, balances, client, amount){
    let clientName=[];
    let  sum =[];
     let amount =0;
     if(amount > balances) return -1;
    for(let i =0 ; i <= clients.length-1;i++){
     for(let j=0 ; j <= balances.length-1;j++){
         
          balances[j] -=amount;
     }
      return balances;
    }
     return clients;
    }