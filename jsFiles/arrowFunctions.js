// const sayHello = function() {
//     console.log('hello');
// }
// // arrow function
// const sayHello2 = () => {
//     console.log('Hello');
// }
// // arrow shortened one line
// const sayHello = () => console.log('Hello');
// sayHello();
// return object
// const sayHello = () => ({
//     msg: 'Hello'
// });
// const sayHello = (name) => console.log(`Hello ${name}`);
// single param doesnot need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);
// sayHello('king0fCode');
// const sayHello = (Fname, Lname) => console.log(`Hello ${Fname} ${Lname}`);
// sayHello('jhon', 'doe');
const users = ['Nathan', 'Jhon', 'William'];
// // basic
// const nameLengths = user.map(function(name) {
//     return name.nameLengths;
// })
// // shorter
// const nameLengths = user.map((name) => {
//     return name.nameLengths;
// })
//shortest
const nameLengths = users.map(name => name.length);
console.log(nameLengths);