let prompt =require ('prompt-sync')();

 
    function checkPrime(n) {  
        for (let i = 2; i<n;i++){
            if (n%i===0){
                return false;
            }
            }
            return true; 
        }
let testNUmber =parseInt (prompt("enter the number to test"));

let isPrime = checkPrime(testNUmber); 


console.log(isPrime);
