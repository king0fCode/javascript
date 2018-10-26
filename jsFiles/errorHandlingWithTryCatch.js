const user = {
    email: 'jdoe@mail.com'
};
try {
    // produce a reference error
    // myFunction();
    // produce a TypeError
    // null.myFunction();
    // will produce sintaxError
    // console.log(eval('2+2'));
    // will produce a URI Error
    // decodeURIComponent('%');
    if (!user.name) {
        throw new SyntaxError('User has no name');
    }
} catch (e) {
    console.log(e);
    // error type and message
    // console.log(`${e.name} : Its null`);
    // console.log(e);
    // console.log(e.message);
    // console.log(e.name);
    // console.log(e instanceof ReferenceError);
} finally {
    console.log('finally runs regardless of result...');
}
console.log('Program Continue');