'use strict'

function prefix(s1, s2) {
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
console.log(prefix(s1, s2));