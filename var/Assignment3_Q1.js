let prompt =require ('prompt-sync')();
let input1=parseInt (prompt("plaese Enter a number"));
let input2 =parseInt (prompt( "please Enter diffrent number"));
//let output1= Math.abs(input1-input2);
//let output2 =(input1-input2);

let averge=(input1 + input2);

 if (averge >= 92){
     console.log('is A');
 }else if(averge >= 85 && averge<92){
    console.log('is B');
   }  else if(averge>=75&& averge<85){
    console.log( 'is C');  
   }else{
    console.log('is NC');
   }
 
