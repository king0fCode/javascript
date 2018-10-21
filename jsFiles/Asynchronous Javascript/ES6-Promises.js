const posts = [{
    title: 'Post one',
    body: 'This is post one'
}, {
    title: 'Post two',
    body: 'This is post two'
}];

function CreatePost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = true;
            if (!error) {
                resolve();
            } else {
                reject('Error: Something wrong');
            }
            resolve();
        }, 2000);
    });
}

function GetPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}
CreatePost({
    title: 'Post Three',
    body: 'This is post three'
}).then(GetPosts).catch((error) => {
    console.log(error);
})