
'use strict'

function suffixs(s1, s2) {
    let commonSuff = " "
    for (let i = 1; i < s1.length; i++) {
        if (s1[s1.length - i] === s2[s2.length - i])
            commonSuff = s1[s1.length - i] + commonSuff
    }
    return commonSuff;
}

let s1 = "walking";
let s2 = "swimming";

console.log(suffixs(s1, s2));