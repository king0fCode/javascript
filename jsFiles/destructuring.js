// destructuring Assignment
let a, b;
[a, b] = [100, 200];
console.log(a); // a git 100
console.log(b); // b git 200
// rest pattern
// [a, b, ...rest] = [100, 200, 300, 400, 500];
// console.log(rest);
({
    a,
    b
} = {
    a: 100,
    b: 200,
    c: 300,
    d: 400,
    e: 500
});
({
    a,
    b,
    ...rest
} = {
    a: 100,
    b: 200,
    c: 300,
    d: 400,
    e: 500
});
// console.log(a, b);
// console.log(rest);
// Array desctruturing
// const people = ['jhon', 'beth', 'mike'];
// const [person1, person2, person3] = people;
// console.log(person1, person2, person3);
// function getPeople() {
//     return ['jhon', 'beth', 'mike'];
// }
// let person1, person2, person3;
// [person1, person2, person3] = getPeople();
// console.log(person1, person2, person3);
// Object destructuring
const person = {
    name: 'john doe',
    age: 32,
    city: 'Miami',
    gender: 'Male',
    sayHello: function() {
        console.log('Hello');
    }
}
// Old ES5
// const name = person.name,
//     age = person.age,
//     city = person.city;
// new ES6 desctruturing
const {
    name,
    age,
    city,
    sayHello
} = person;
console.log(name, age, city);
sayHello();