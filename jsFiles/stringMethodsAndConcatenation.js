const firstName = 'William';
const lastName = 'Jhonson';
const age = 36;
let val;
const str = 'Hello there my name is brad';
const tags = 'well, design, programming, languages';


val = firstName + lastName;

//concatenation

val = firstName + ' ' + lastName;

//  Append
val = 'brad ';
val += 'traversy';

val = 'Hello , my name is ' + firstName + ' and i am ' + age;

// Escaping 
val = 'that\'s  awesome, i can\'t wait';

//length
val = firstName.length;

//concat 
val = firstName.concat(' ', lastName);

//change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

//index of()
val = firstName.indexOf('l')
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt('2');

// get last char
val = firstName.charAt(firstName.length - 1);

//substring () 
val = firstName.substring(0, 4);

// slice ()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

//split 
val = str.split(' ');
val = tags.split(',')

// replace()
val = str.replace('brad', 'jack');

// includes()
val = str.includes('Hellos');


console.log(val);