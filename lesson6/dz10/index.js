function withdraw(clients, balances, client, amount){
    let clientName=[];
    let  sum =[];
     let withdrawMoney =0;
    for(let i =0 ; i <= clients.length-1;i++){
     for(let j=0 ; j <= balances.length-1;j++){
          if(withdrawMoney > balances) return -1;
          balances[j] -=withdrawMoney;
     }
      return balances;
    }
     return clients;
    }