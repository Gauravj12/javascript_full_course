// arrays => in variable we can store only one value but in aaray we can store more than one value
// array is a group of values

let arr1 = [1, 3, 5, 6, 7, 8, 9];
//index position of array starts with 0 like arr1 = [0, 1, 2, 3, ...]
console.log(arr1[2]) //5
// push, pop, shift, unshift, splice

arr1.push(4,12); //add additional value in array from last index
arr1.pop(); //removes last element from array
arr1.unshift(0); //add additional value in array from first index 
arr1.shift(); //removes first element from array
arr1.splice(2, 2); //removes 2 elements from 2nd index in array
console.log('arr1',arr1);

