// library.js defined the eastHTTP object
const http = new easyHTTP();
// // GET Posts
// http.get('https://jsonplaceholder.typicode.com/posts', (err, response) => {
//     console.log(err, response);
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });
// // get single post
// const http = new easyHTTP();
// // GET Posts
// http.get('https://jsonplaceholder.typicode.com/posts/1', (err, response) => {
//     console.log(err, response);
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });
// Create Data 
const data = {
    title: 'Custom Post Update2',
    body: 'This is a custom post'
};
//     // Create Post 
// http.post('https://jsonplaceholder.typicode.com/posts/', data, (err, response) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// })
// update post data 
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, (err, response) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });
http.delete('https://jsonplaceholder.typicode.com/posts/1', (err, response) => {
    console.log(err, response);
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});