// we will give you an array 
// will contain integers plus minus and 0
// check how many negatives how many positives and // how many are zero. devide those totals by the
// array length to get the ratio

function plusMinus(arr) {
    // Write your code here
    let zeros = 0
    let positives = 0
    let negatives = 0
    
    arr.forEach(i=>{
        if(i === 0){
            zeros+=1
        }
        if(i > 0){
            // means positive
            positives+=1
        }
        if(i < 0){
            // means negative
            negatives+=1
        }
    })
    
    let x = arr.length
    console.log(positives/x)
    console.log(negatives/x)
    console.log(zeros/x)
}

plusMinus([1,1,0,-1,-1])