let a = [5,6,7]
let b = [3,6,10]

let alic = 0
let bob = 0 


for(let i = 0 ; i < 3; i++){
  
  if(a[i]>b[i]){
    alic+=1
  }
  if(a[i]<b[i]){
    bob+=1
  }
  
}

let scoreCard = [alic, bob]
console.log(scoreCard)