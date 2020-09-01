
'use strict'


function extractGivenName(fullName) {
    let temp_array = [];
    let k = 0;
    let words = fullName.split(" ");
    for (let i = 0; i < words.length; i++) {
        temp_array[k] = words[words.length - 1];
    }
    return temp_array.join();
}

let fullName1 = ' solomon, atsbeha';
let mylastname = extractGivenName(fullName1);
console.log(mylastname);