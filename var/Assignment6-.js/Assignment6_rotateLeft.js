function rotateLeft(array){
    let rotated = [];
     for(let i = 0;i<array.length-1;i++ ){
        rotated[i] = array[i+1];
        rotated[array.length-1] = array[0];
    }
    return rotated;
}
let list = [17,8,9,5,20];
console.log(rotateLeft(list));

