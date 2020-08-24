
let prompt =require ('prompt-sync')();

let guess =parseInt(prompt ("I'm thinking of a number between 1 and 100.\n" +
            "Try to guess it!\n" +
            "Please enter an integer between 1 and 100."));
        let answer = 38;
    
        let count = 1;
      while (guess != answer) {guess =parseInt(prompt ("I'm thinking of a number between 1 and 100.\n" +
        "Try to guess it!\n" +
        "Please enter an integer between 1 and 100."));count++;}{
            
            if (guess < answer) {
              console.log(   guess +
                    " is too low. Please enter another integer.");
            
            }      
            else if (guess > answer) {
              console.log  (guess +
                    " is too high. Please enter another integer.");
                    
            }    
        } 
         guess + " is correct!";
       console.log (guess + " after you have tried for  " + count + " times");