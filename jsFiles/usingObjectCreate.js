const personPrototypes = {
    greeting: function() {
        return `Hello There ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName) {
        this.lastName = newLastName;
    }
}
const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'William';
mary.age = 30;
mary.getsMarried('thompson');
console.log(mary.greeting());
const brad = Object.create(personPrototypes, {
    firstName: {
        value: 'Brad'
    },
    lastName: {
        value: 'Traversy'
    },
    age: {
        value: 36
    }
});
console.log(brad);
console.log(brad.greeting());