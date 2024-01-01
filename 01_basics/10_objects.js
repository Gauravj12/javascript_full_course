//objects => hold the data in key value pair

// blank object
let a = {};

// filled object
let b = {
    age: 24,
    name: 'Harsh',
    city: 'Bhopal',
    gender: 'male',
    occupation: function() {
      console.log('a great teacher');  
    }
}
// props(properties) and methods
// properties
console.log(b.city, b.age);

// method
console.log(b.occupation()); 

//change the values of properties
b.city = 'Thane'
b.name = 'Suresh'
console.log(b.city, b.name);

console.log(b);