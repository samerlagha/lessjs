function swap(m,n){
 let specialNumbers=[];
 for(let i = m; i <= n;i++){

    if(i % 3 ===0){
        specialNumbers.pop(i);
    }
 }
    return specialNumbers;
}