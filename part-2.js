//Assignment 2-A Part 2
//Due Feb 12
//This short exercise will introduce you to arrays
var numOfArray = 1000;

//This creates an empty new array
var newArray = [];

//TODO: populate the new array with 1000 new random values between 50 and 200
//hint: array.push
//hint: Math.random() creates a random value between 0 and 1
for(var i=0; i<numOfArray;i++){
	var newPoint= 50+Math.random()*150;
	newArray.push(newPoint);
}
 console.log(newArray);
//TODO: after you populate the array, find the average of all the values in the array

var arraySum = 0;
newArray.forEach(function(arrayElement){
	//hint: here, we are "looping" through the array, accessing each array element one by one
	//we can add the value to arraySum
	//and finally, we divide arraySum by the total number of array elements
	arraySum += arrayElement;

});
var a= arraySum/newArray.length;
console.log(arraySum);
console.log(a);
