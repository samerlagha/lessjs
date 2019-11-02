function findDivCount(a, b, n){
    let res =0;
    for (let i = a; i < b; i++) {
              if (i % n == 0){
                  res +=i;
              } else if(i % n ==0){
                  return 0;
              }
  }
    return res;
  
  }
  
    