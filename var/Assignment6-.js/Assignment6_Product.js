function multiply( list, multiplier){
    let product = [];
       for (let i = 0;i<list.length;i++){
           list[i]= list[i]*multiplier;
       }
       return list;
   }
   let list = [1,2,3,4];
   console.log(multiply( list, 3));