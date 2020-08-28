
let prompt =require ('prompt-sync')();

//function fahrToCels(){
//let far = parseFloat(prompt("enter the value of temperature in Fahrenheit"));

//let tempCelsius = 5 / 9 * ( tempfahr- 32);

//let fahrToCels=tempCelsius ;
//return fahrToCels;


function fahrToCells(far){
    
    let c = 5 / 9 * (far - 32);
    return c;
}
let Fahrenheit = parseFloat(prompt("enter the value of temperature in Fahrenheit"));
let c=fahrToCells(Fahrenheit);

console.log(c);