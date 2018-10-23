const http = new Easyhttp;


// GET REQUEST
// get users
// http.get('https://jsonplaceholder.typicode.com/users');

// const users = http.get('https://jsonplaceholder.typicode.com/users');

// console.log(users);

// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));




// POST REQUEST
// // users data
// const data = {
//         name: 'jhon doe',
//         username: 'abc122',
//         email: 'jhon@mail.com'

//     }
//     //make post

// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));



// PUT REQUEST
// users data
const data = {
        name: 'jhons doe',
        username: 'abc122',
        email: 'jhon@mail.com'

    }
    //update post

// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// DELETE REQUEST

//delete post

http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err));