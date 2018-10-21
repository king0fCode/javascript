// // strings 
// const name1 = 'jeff';
// const name2 = new String('jeff');
// // name2.foo = 'bar';
// console.log(name2);
// console.log(typeof name2);
// if (name2 == 'jeff') {
//     console.log('yes');
// } else {
//     console.log('no');
// }
// // Numbers 
// const num1 = 5;
// const num2 = new Number(5);
// console.log(num2);
// console.log(typeof num2);
// // boolean 
// const bool1 = true;
// const bool2 = new Boolean(true);
// console.log(bool2);
// console.log(typeof bool2);
// // Function
// const getSum1 = function(x, y) {
//     return x + y;
// }
// const getSum2 = new Function('x', 'y', 'return 1 + 1');
// console.log(getSum2(1, 1));
// Object 
const jhon = {
    name: "Jhon"
};
const jhon2 = new Object({
    name: "Jhon"
});
console.log(jhon);
console.log(jhon2);
console.log(typeof(jhon));
console.log(typeof(jhon2));
// arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);
// Regular experssions
const rel1 = /\w+/;
const rel2 = new RegExp('\\w+');
console.log(rel2);