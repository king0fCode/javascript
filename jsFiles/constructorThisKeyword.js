// const brad = {
//     name: 'Brad',
//     age: 30
// }
// console.log(brad);
// console.log(brad.age);
// Constructor metho
// person constructor
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     // console.log(this);
// }
// // console.log(this.alert(1));
// const brad = new Person('brad', 35);
// const jhon = new Person('jhon', 43);
// console.log(brad);
// console.log(jhon);
function Person(name, dob) {
    this.name = name;
    this.birthday = new Date(dob);
    this.getAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    // console.log(this);
}
// // console.log(this.alert(1));
// const brad = new Person('brad', 35);
// const jhon = new Person('jhon', 43);
const brad = new Person('charith', '9-10-1990');
console.log(brad.name);
console.log(brad.getAge());