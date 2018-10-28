const data = [{
        name: 'jhon doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/portraits/men/4.jpg'
    },
    {
        name: 'jen smith',
        age: 26,
        gender: 'female',
        lookingfor: 'male',
        location: 'Miami FL',
        image: 'https://randomuser.me/portraits/women/4.jpg'
    },
    {
        name: 'William Jhonson',
        age: 38,
        gender: 'male',
        lookingfor: 'female',
        location: 'lynn MA',
        image: 'https://randomuser.me/portraits/men/33.jpg'
    }
];


const profiles = profileIterator(data);
// profile iterator


//  class first profile
nextProfile();

// next event
document.getElementById('next').addEventListener('click', nextProfile);


// next profile display function
function nextProfile() {

    const currentProfile = profiles.next().value;
    if (currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group>
    <li class="list-group-item">Name: ${currentProfile.name}</li>

    <li class="list-group-item">Age: ${currentProfile.age}</li>

    <li class="list-group-item">Location: ${currentProfile.location}</li>

    <li class="list-group-item">Gender: ${currentProfile.gender}</li>

    <li class="list-group-item">Looking for: ${currentProfile.lookingfor}</li>
    </ul>`;

        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    } else {
        // no more profiles . reload the page
        window.location.reload();
    }

}

function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < profiles.length ? {
                value: profiles[nextIndex++],
                done: false
            } : {
                done: true
            }
        }
    };
}