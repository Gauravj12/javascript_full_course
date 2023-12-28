const accountId = 124421;  // value remain constant, user can't change it
let accountEmail = "gaurav@gmail.com"; // user can change the value in let variable
var accountPassword = "12345"; // don't use var cuz its can access and change outside {} block/ function scope also
accountCity = "mumbai"; // javascript can understand if you declare a variable without any keywords
let accountState; // javascript will consider this as a undefined varable

//accountId = 444512; // you can't change constant variable value

accountEmail = 'gaurav@outlook.com';
accountPassword = '54321';
accountCity = 'thane';

//console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])