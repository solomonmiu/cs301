'use strict'

/*function prefix(s1, s2) {
    let common = " "
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === s2[i]) {
            common += s1[i];
        }
    }
    return common;
}
let s1 = "disable";
let s2 = "dishonnest";
console.log(prefix(s1, s2));*/

function findMIn(a){
    let min = [0];

for (let i = 0; i < a.length; i++) {
if (a[i] <min){
    min = a[i];
}
    
}
return min;
}
let num = [12,13,-4,6]
console.log(findMIn(num));