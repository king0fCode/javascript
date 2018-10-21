// Person constructor 
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
// Greeting
Person.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
}
const person1 = new Person('jhon', 'Doe');
console.log(person1.greeting());
// customer constructor
function Customer(firstName, lastName, phoneNumber, membership) {
    Person.call(this, firstName, lastName);
    this.phone = phoneNumber;
    this.membership = membership;
}
// Inherit the person protype methods
Customer.prototype = Object.create(Person.prototype);
// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;
// Create a customer
const customer1 = new Customer('Tim', 'smith', '0000000', 'Standard');
// console.log(customer1);
// Customer Greeting
Customer.prototype.greeting = function() {
    return `Hello There ${this.firstName} ${this.lastName}. Welcome to our company`;
}
console.log(customer1.greeting());