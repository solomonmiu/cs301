let prompt =require ('prompt-sync')();
let  regularHour= prompt(" plaese Enter regular hours worked");
let employewage= prompt(" please Enter wage per hour");
let Gross_Salary= parseInt(regularHour)*parseFloat(employewage);
let Tax= Gross_Salary*.15;
let netPay= Gross_Salary-Tax;
console.log(netPay);

