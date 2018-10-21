const person = {
    firstName: 'steve',
    lastName: 'smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    },

    getBirthyear: function() {
        return 2017 - this.age;
    }
}

let val;

val = person;


//get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthyear();


console.log(val);

const people = [
    { name: 'Jhon', age: 30 },
    { name: 'Mike', age: 23 },
    { name: 'nancy', age: 40 }
];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);

}