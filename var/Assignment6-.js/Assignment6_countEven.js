function countEvens(array){
    let count = 0;
    for(let i = 0;i<array.length;i++){
        if(array[i]%2==0)
        count++;
    }
    return count;
}
let list = [17,8,9,5,20];
console.log(countEvens(list));