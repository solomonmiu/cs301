let prompt =require ('prompt-sync')();
let input = prompt("enter the weather");
 if (input =="hot"){
 console.log("weather is hot : wear sandals");}
 else if (input =="rain"){
 console.log("weather is rainy: wear galoshoes");}
 else if (input=="snow"){
 console.log("weather is snowing : wear boots");
 }else {
 console.log("wear shoes");
 }