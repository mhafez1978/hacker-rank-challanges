arr = [
  [11, 2, 4],
  [4, 5 ,6],
  [10, 8, -12]
]
    
 let n = arr.length; 
    let d1 = 0;
    let d2 = 0;
  for(let i=0; i<n; i++){
     for(let j=0; j<n; j++){
       // finding the sum of primary diagonal
         if(i === j) {
           d1 += arr[i][j];
         }
       // finding the sum of secondary diagonal
         if(i + j === n - 1){
            d2 += arr[i][j];
         }
      }
  }
let results = Math.abs(d1-d2)
console.log(results)
return results;