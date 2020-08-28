/*
 function getMiddle(array) {
    let middleOdd = Math.floor(array.length / 2);
    let midIndex = array.length / 2;
    for (let i = 0; i < array.length; i++) {

        if (array.length % 2 !== 0) {
            return array[middleOdd];
        }
        else {
            return (array[midIndex] + array[midIndex - 1]) / 2;
        }
    }
}
let list1 = [1, 5, 8, 9, 11]
let list2 = [1, 2, 3, 4, 5, 6]
console.log("list 1 is = " + getMiddle(list1));
console.log("list 2 is = " + getMiddle(list2));
*/

function arrayRevese(array) {
    let temp = [];
    for (let i = 0; i < array.length; i++) {
        temp[i] = array[array.length - i - 1];
    }
    return temp;
}
let array = [3,2,1,]
console.log(arrayReverse(array));
