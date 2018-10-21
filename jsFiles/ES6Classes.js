class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = dob;
    }
    greeting() {
        return `Hello There ${this.firstName} ${this.lastName}`;
    }
    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getFullYear() - 1970);
    }
    getMarried(newLastName) {
        this.lastName = newLastName;
    }
    static addNumbers(x, y) {
        return x + y;
    }
}
const mary = new Person('Mary', 'Williams', '11-22-1998');
mary.getMarried('arriaza');
// mary.calculateAge();
//static function dont work calls
// mary.addNumbers(3, 4);
console.log(mary);
console.log(Person.addNumbers(3, 4));