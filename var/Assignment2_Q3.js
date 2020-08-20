let prompt =require ('prompt-sync')();
let totalBox= prompt ("please Enter Total number of Boxes");
let box_eachstack= prompt("please Enter Total number of Boxes in each stack");
let remainingBox= parseInt(totalBox % box_eachstack);
let numberstack= parseInt(totalBox/box_eachstack);
if (remainingBox > 0){
    console.log  (numberstack+=1);
}else {
    console.log(numberstack);
}


 

   

 