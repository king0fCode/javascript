/*
easy http library using Async and Await
Library for making HTTP request ES6

@version 3
@author : jon doe
@license MIT
*/

// class Easyhttp {
//     // make a http get request
//     get(url) {
//         fetch(url).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));
//     }
// }


class Easyhttp {
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    // make a HTTP POST Request

    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }


    // make a HTTP put Request

    async put(url, data) {

        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resData = await response.json();
        return resData;


    }


    // make a HTTP DELETE Request

    async delete(url) {

        const response = await fetch(url, {
            method: 'delete',
            headers: {
                'Content-type': 'application/json'
            }
        });
        const resData = await 'Resource Deleted';
        return resData;


    }
}