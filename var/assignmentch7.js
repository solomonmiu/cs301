let prompt =require ('prompt-sync')();
let Age= prompt(" please Enter Age");
let season= prompt(" plaese Enter season"
let bedtime;

if(Age <=5&& (season==="summer"|| season==="fall")){

    console.log(bedtime= 830);
}else if (Age <=5 && season==="spring"|| season==="winter" ){
console.log(bedtime= 800);
} if ((Age>= 6 && Age<=12)&& season==="summer"){
    console.log(bedtime= 930 );
}else if ((Age>= 6 && Age<=12)&& (season==="spring"|| season==="winter"|| season==="fall")){
    console.log(bedtime= 830 );
}if(Age >= 13&& (season=== "summer")){
    console.log(bedtime= 1030 );
}else if(Age >=13 &&(season==="winter"||season==="fall"||season==="spring" )) {
    console.log(bedtime= 930 );
}