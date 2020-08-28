let prompt =require ('prompt-sync')();


function christmasSong(arr1,arr2,n) {
    let arr3 = [];
    for (let i = 0; i <= 12; i++) {
       
        for (let i = n; i>= 0; i--) {
            arr3[i] = arr1[i]+arr2[i];
        }
    }
   return arr3;
}
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let array2 = ["a partridge in a pear tree","two turtle doves","three French hens","four calling birds","five golden rings","six geese a laying","seven swans a swimming","eight maids a milking","nine ladies dancing","ten lords a leaping","eleven pipers piping","twelve drummers drumming"]
console.log(christmasSong(array1,array2, 11))



let n = parseFloat(prompt("plaese enter an integer between 1 and 12"));

// 1 a partridge in a pear tree
// 2 two turtle doves
// 3 three French hens
// 4 four calling birds
// 5 five golden rings
// 6 six geese a laying
// 7 seven swans a swimming
// 8 eight maids a milking
// 9 nine ladies dancing
// 10 ten lords a leaping
// 11 eleven pipers piping
// 12 twelve drummers drumming