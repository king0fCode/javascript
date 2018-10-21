// object.prototype
//person.prototype
// person Constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function () {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}
// Calculate Age
Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
// Get full name 
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}
// Gets married
Person.prototype.getsMarried = function(newLastName) {
    this.lastName = newLastName;
}
const jhon = new Person('john', 'Doe', '8-12-1990');
const mary = new Person('mary', 'jhonson', '7-23-1976');
console.log(mary.firstName);
console.log(jhon.calculateAge());
console.log(mary.getFullName());
mary.getsMarried('smith');
console.log(mary.getFullName());
console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName'));