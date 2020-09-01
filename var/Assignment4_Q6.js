
/*for(let i = 0;i<=31;i++){

    console.log("2^"+i+" = "+Math.pow(2,i));
}
*/

function isPalindrome(str){
    let temp = '';
for (let i = str.length-1;i>=0; i--) {
    temp+= str[i];  
}
if(temp.toUpperCase ===str.toUpperCase){
    return true;
}
return false
}
let test = "mam";
let test1 = "Madam"
//let revTest = test1.reverse();
console.log(isPalindrome(test1));

