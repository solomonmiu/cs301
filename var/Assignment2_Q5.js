let prompt =require ('prompt-sync')();
let intodometer= prompt(" plaese Enter bigning odometer");
let finalodmeter=prompt(" plaese Enter final odometer");
let number_gallons= prompt("please Enter number gallons used");
let milegPergallons =parseFloat(finalodmeter-intodometer)/number_gallons;
console.log(milegPergallons);
