// short hand character classes
re = /\w/; // any character any number or underscore _
// re = /\w/+; // + = one or more
re = /\W/; // anything but not char,number, _
re = /\d/; // match any digit
// re = /\d/+; // match all digit
re = /\D/; // match any non digit
re = /\s/; // match whiteplace characters
re = /\S/; // match non whiteplace characters
re = /\Hell\b/i; // word boundry (match exactly word hell only)
//assertions
re = /x(?=y)/; // match x only if followed by y
re = /x(?!y)/; // match x only if not followed by y
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