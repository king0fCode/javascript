/*
easy http library
Library for making HTTP request ES6

@version 2
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
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));

        });

    }

    // make a HTTP POST Request

    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));

        });

    }


    // make a HTTP put Request

    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));

        });

    }


    // make a HTTP DELETE Request

    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'delete',
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(data => resolve('Resource Deleted....'))
                .catch(err => reject(err));

        });

    }
}