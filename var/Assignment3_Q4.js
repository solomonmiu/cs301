let prompt =require ('prompt-sync')();
let cost_house= prompt(" plaese Enter cost of house");
let Downpayment;
if (cost_house< 50000){
   console.log( Downpayment= cost_house*.05);
}else if (cost_house< 100000) {
    console.log( Downpayment= 2000+.1*(cost_house-50000));

}else if (cost_house< 200000) {
    console.log( Downpayment= 7500+.2*(cost_house-100000));
}else{
    console.log( Downpayment= 27500+.25*(cost_house-200000));  
}