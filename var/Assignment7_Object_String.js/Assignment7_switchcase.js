'use strict'

function switchCase(s) {
    let temp = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase()) {
            temp += s[i].toLowerCase();
        }
        else {
            temp += s[i].toUpperCase();
        }
    }
    return temp;
}

let s1 = "Catch 22"
console.log(switchCase(s1))