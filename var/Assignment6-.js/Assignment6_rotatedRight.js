function rotateLeft(array){
    let temp = [];
     for(let i = 0;i<array.length-1;i++ ){
        temp[0] = array[array.length-1];
        temp[i+1] = array[i];
       
    }
    return temp;
}
let list = [17,8,9,5,20];
console.log(rotateLeft(list));