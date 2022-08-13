## Node JS and some util

Hacker Rank Code Challanges That I solved ...

> sumNumbersOrarrayOfNumbers
in this one we create a function that takes an array of either numbers or array of numbers.

- example: 
myValues = [ 1,2,3,[4,5,6] ]

Our function will iterate using a forEach()
and check if its a number it will added it sum.
some initial value is 0. However if input is array it will also check they are numbers, if they are they will also be added to sum

in the end the function will return the sum of all myValues. or throw and error.

things to note when testing , If you include an undefined varaible in the array of numbers (NOT String Type) this will fail the function instead of gracefully doing so via my console.log err msg.

I may need to revisit how this is working ... if you can solve this in better method please do share...J

> Compare Triplets Challange

Given two array of numbers we will compare each index in each array and aware a point to the greater number , if both are equal no points 
then we return the score