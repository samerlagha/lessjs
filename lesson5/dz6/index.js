function  getPrimes(num1,num2){
    for ( num1 =1; num1 <= num2; num1++)
    {
        let notPrime = false;
    
        for (let j = 2; j <= (num1 - 1); j++) 
    
        {
            if (num1 % j === 0) notPrime = true;
        }
    
        if (notPrime === false)  console.log(num1);
    }
    }
    getPrimes(2,17);




 