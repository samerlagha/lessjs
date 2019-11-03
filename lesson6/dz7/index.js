 function sortAsc(array){

 let arrayAss=[];
 for (i=arrayAss.length-1;i>=0;i--) {
           
for (j=0;j<i;j++) {
    if (arrayAss[j]>arrayAss[j+1]) {
        let temp=arrayAss[j];
            arrayAss[j]=arrayAss[j+1];
             arrayAss[j+1]=temp;
                }
            }
        }   

       // console.log(array);
 }

function sortDesc(array){

    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (array[j + 1] < array[j]) {
          let t = array[j + 1];
          array[j + 1] = array[j];
          array[j] = t;
        }
      }
    }
    //return array; 
  }
