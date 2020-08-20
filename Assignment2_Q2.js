let prompt =require ('prompt-sync')();
let Distance_killometer= prompt ("Enter distance in Killometer");
let Distance_miles= parseFloat(Distance_killometer)* 1.60;
console.log(Distance_miles);
