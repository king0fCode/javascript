// Create some arrays
const numbers = [43, 56, 33, 23, 100, 36, 6];
const numbers2 = new Array(22, 44, 100, 623, 33);
const fruit = ['apple', 'lemon', 'banana', 'orange', 'pear'];
const mixed = [22, 'hello', true, undefined, null, {
    a: 1,
    b: 1
}, new Date()];
let val;
// Get array length
val = numbers.length;
// Check if is array 
val = Array.isArray(numbers);
// get single value 
val = numbers[3];
val = numbers[0];
// insert into array
numbers[2] = 100;
// find index of value 
val = numbers.indexOf(100);
// mutating arrays 
//add on to end
numbers.push(250);
// add onto front
numbers.unshift(120);
//take off from end
numbers.pop();
// take off from frong
numbers.shift();
// Splice values 
numbers.splice(1, 1);
numbers.splice(1, 3);
// Reverse
numbers.reverse();
//concat arrays
val = numbers.concat(numbers2);
// sorting arrays
val = fruit.sort();
val = numbers2.sort();
// use the "compare function"
val = numbers.sort(function(x, y) {
    return x - y;
});
// reverse sort 
val = numbers.sort(function(x, y) {
    return y - x;
});
// find 
function under50(num) {
    return num < 50;
}

function over50(num) {
    return num > 50;
}
val = numbers.find(under50);
val = numbers.find(over50);
console.log(numbers);
console.log(val);