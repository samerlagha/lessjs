function  getPrimes(num1,num2){
    for (let i = num1; i <= num2; i++)
    {
        let not_prime = false;
    
        for (let j = 2; j <= (i - 1); j++) 
    
        {
            if (i % j === 0) 
            {not_prime = true;}
        }
    
        if (not_prime === false) 
        {console.log(i);}
    }
    }
    getPrimes(2,10);




 