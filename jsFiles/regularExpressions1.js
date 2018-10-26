//regular expressions
let re;
re = /hello/;
re = /hello/i; // i = case insensitive
// re = /hello/g;
//global search , search for entire word for matchings
// console.log(re);
// console.log(re.source);
// exec() return result in an array or null
// const result = re.exec('hello world');
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);
// test() - Return true or false
// const result = re.test('hello');
// console.log(result);
//match() - return result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);
// seearch () - Return index of the first match if not found it return -1
// const str = 'Hello There';
// const result = str.search(re);
// console.log(result);
// Replace() - return new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);