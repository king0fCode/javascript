// async function myFunc() {
//     return 'Hello';
//     const promise = new promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello'), 2000);
//     });
//     const err = true;
//     if (!err) {
//         const res = await promise;
//     } else {
//         await Promise.reject(new err('Something went wrong'));
//     }
//     const res = await promise; // wait untill promise is resolve
//     return res;
// }
// // console.log(myFunc());
// myFunc().then(res => console.log(res)).catch(err => console.log(err));
async function getUsers() {
    // await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // only proceed once its resolve
    const data = await response.json();
    //only proceed once second promise is resolved
    return data;
}
getUsers().then(users => console.log(users));