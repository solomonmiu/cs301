let prompt =require ('prompt-sync')();
let Age= prompt(" please Enter Age");
let season= prompt(" plaese Enter season");
let bedtime;

if(Age <= 5){
    if(season=="summer"||season== "fall"){
       console.log(bedtime=" bed time is 8:30 pm");

    }  if (season== "winter"|| season =="spring")
    {
        console.log(bedtime=" bed time is 8:00 pm"  ); 
    }
}else if(Age>= 6 && Age<=12){
    if(season==="summer"){
        console.logbedtime=("bed time is 9:30 pm"  ); 
    }   if (season== "winter"|| season=="spring"||season== "fall"){
        console.log(bedtime="bed time is 8:30 pm"  ); 
    }

}else{
    if(season==="summer"){
        console.log(bedtime="bed time is 10:30 pm" );
    }  if (season== "winter"|| season=="spring"||season=="fall"){
        console.log(bedtime="bed time is 9:30 pm"  ); 
    }
}











