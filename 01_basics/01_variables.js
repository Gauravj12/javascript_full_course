//es5 js => var
//es6 js => let, const

//var is function scope => can use anywhere in parent function
//let and const is braces scope => can use in braces only {}

//with var
function fun1(){
    for (var i=1; i<12; i++){
        console.log('in for',i);
    }
    console.log('in fun',i);
}
fun1();


//with let
function fun2(){
    for (let i=1; i<12; i++){
        console.log('in for',i);
    }
    console.log('in fun',i);
}
//fun2()

//var adds itself to the window object
//let and const does not adds itself to the window object
/*if you go on browser and in inspect you check the window object you can view the var variable but not let and const 
this is create data security issue thats why we should use let and const*/
/*window object => there are some things which are not available in javascript but we can use those in js by
accessing them through browser and one of those thing is window object*/


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

//console.table([accountId, accountEmail, accountPassword, accountCity, accountState])