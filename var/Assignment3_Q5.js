let prompt =require ('prompt-sync')();
let status= prompt("plaese Enter your patron status");
let number_overdue= prompt ("please Enter number of overdue books last year");
let loan_duration;
if(number_overdue =0){
    if(status="student"){
        console.log(loan_duration= 6 +"weeks");
    }else if(status="faculty"){
        console.log(loan_duration=16 +"weeks");

    }else{
        console.log(loan_duration= 4 +"weeks")
    }
}   
else if(number_overdue < 3){
    if(status="student"){
        console.log(loan_duration=4+"weeks");
     } else if(status="faculty"){
       console.log(loan_duration=12 +"weeks");

     }else{
    console.log(loan_duration=3 +"weeks");
     }
}
else{
    if(status="student"){
    console.log(loan_duration= 2+"weeks");

    }else if(status="faculty"){
        console.log(loan_duration = 4 +"weeks");
    }else{
        console.log(loan_duration = 2 +"weeks");
    }

}



  



