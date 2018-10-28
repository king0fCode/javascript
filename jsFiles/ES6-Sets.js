// sets - store unique values of any type
const set1 = new Set();
// add values to set
set1.add(100);
set1.add('a string');
set1.add({
    name: 'jhon'
});
set1.add(100);
set1.add(true);
// const set2 = new Set([1, true, 'string']);
console.log(set1);
//get count
// console.log(set1.size);
// check for values
// console.log(set1.has(100));
// console.log(set1.has(50 + 50));
// console.log(set1.has({
//     name: 'jhon'
// }));
console.log({
    name: 'jhon'
} === {
    name: 'jhon'
}); // set 2 values on different locations on memory
// delete from the set
// set1.delete(100);
// console.log(set1);
//iternating through sets
// for..of
// for (let item of set1) {
//     console.log(item);
// }
// foreach loop
// set1.forEach(function(value) {
//     console.log(value);
// })
// convert set to array
const setArr = Array.from(set1);
console.log(setArr);