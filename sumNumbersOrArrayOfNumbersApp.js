const { isArray } = require("util");

const myValue = [1,2,4,[1,2,4]];
let sum = 0;

function sumit(myValue){

	myValue.forEach((i)=>{
		if(i === undefined){
			console.log('can only sum numbers ... ')
		}
		if(isArray(i)){
			i.forEach(z=>{
				if(Number(z) || z !== undefined){
					sum+=z
				}else{
					console.log('we can only sum numbers ...')
				}
			})
		}else{
			//check i is a number
			if(Number(i) || i !== undefined){
				sum+=i
			}else{
				console.log('we can only sum numbers ...')
			}	

		}
	})
	console.log(sum)
  	return sum
}

sumit(myValue)