// primitive and reference types

// primitive = number, string, null, undefined, boolean
// reference = [], (), {}

// reference => any value which is not get real copy after copy,  only their reference is passed
// primitive => any value which gets real copy

// if there is brecket then they are reference types => [], (), {}

// reference ex
let arr1 = [1, 2, 3, 4, 5];

let arr2 = arr1;

arr2.pop()

console.log('arr1',arr1);
console.log('arr2',arr2); // changes of arr2 also reflects in arr1 in refererence type

// primitive ex
let a = 12;
let b = a;

b=b-1;

console.log('a',a);  
console.log('b',b); // changes of b not reflect in a in primitive type
