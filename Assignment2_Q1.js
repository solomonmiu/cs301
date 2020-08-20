let prompt =require ('prompt-sync')();
let volumeQuarts= prompt ("Enter volume in  quarts");
let volumeLiter= parseFloat(volumeQuarts)* 0.94;
console.log(volumeLiter);