const posts = [{
        title: 'Post One',
        body: 'This is post one'
    },
    {
        title: 'Post two',
        body: 'This is post two'
    }
];

function createPost(post) {
    setTimeout(() => {
        posts.push(post);
    }, 2000);
}

function getPosts() {
    setTimeout(() => {
        let output = '';
        alert('test');
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({
    title: 'Post Three',
    body: 'This is post three'
});
getPosts();