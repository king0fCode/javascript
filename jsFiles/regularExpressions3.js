// brackets [] - character sets
re = /gr[ae]y/i; // one of 2 character has to be (a or e) !null / not other char
re = /[GF]ray/; // one of 2 character has to be (G or F) case sensitive / !null / not other char
re = /[^GF]ray/; // opposite of above ( match anything except G or F)
re = /^[GF]ray/; // has to begin with G or F
re = /[A-Z]ray/; // match any uppercase letter
re = /[a-z]ray/; // match any lowercase letter
re = /[A-Za-z]ray/; // match any letter
re = /[0-9]ray/; // match any digit
re = /[0-9][0-9]ray/; // match any digit 2 places
// braces () - quantifiers
re = /hel{2}o/i; // must occur exaclty {l} amount of times
re = /hel{2,4}o/i; // must occur 2 to 4 {l} amount of times
re = /hel{2,}o/i; // must occur atleast 2 times
// parenthesis () - grouping
re = /^([0-9]x{3}$)/ // 3x three times
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