// if() {
//    do something
// } else {
//    do something else 
// }
const id = 100;
// // Equal to
// if (id == 110) {
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }
// // Not Equal to 
// if (id != 110) {
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }
// // Equal to value & type
// if (id === 100) {
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }
// // not equal to value and type 
// if (id !== 100) {
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }
// // Test if undefined
// if (typeof id !== 'undefined') {
//     console.log(`The ID is ${id}`);
// } else {
//     console.log('NO ID');
// }
// Greater or less than
// if (id >= 200) {
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }
// If ELSE 
// const color = 'yellow';
// if (color === 'red') {
//     console.log('color is red');
// } else if (color === 'blue') {
//     console.log('color is blue');
// } else {
//     console.log('color is not red or blue');
// }
// Logical operators
const name = 'Steave';
const age = 42;
// And &&
if (age > 0 && age <= 12) {
    console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
    console.log(`${name} is a teenagers`);
} else {
    console.log(`${name} is an adult`);
}
// OR ||
if (age < 16 || age > 65) {
    console.log(`${name} Cannot run in race`);
} else {
    console.log(`${name} is registered for the race`);
}
// Ternary operator
console.log(id === 100 ? 'Correct' : 'Incorrect');
// without braces
if (id === 100) console.log('correct');
else console.log('incorrect');