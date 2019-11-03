function cloneArr(arr){
    let temp = { arr : arr };
 let obj = $.extend(true, {}, temp);
 return obj.arr;
 
 }