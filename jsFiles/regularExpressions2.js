let re;
// literal characters
re = /hello/;
re = /hello/i; //case insensitive
// meta character symbols
re = /^h/i // must start with + case insensitive
re = /d$/i // must end with d + case insensitive
re = /^hello$/i // begin with h and end with o paragraph + case insensitive
re = /^h.llo$/i // this . matches any ONE character "const str = 'Hyllo world';" wild card
re = /h*llo/i // this . matches any character 0 or more time (complete wild card)
re = /gre?a?y/i; // optional e or a one of two lettes  match with string or without those 2 characters
// Escaping characters
re = /greay\?/i; // y must match with string
//string to match
const str = 'Hello world';
// log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matched ${re.source}`);
    } else {
        console.log(`${str} does not match ${re.source}`);
    }
}
reTest(re, str);