// function declarations
function greet(firstName = 'jhon', lastName = 'Doe') {
    // console.log('hello');
    return 'hello ' + firstName + ' ' + lastName;
}
// console.log(greet());
// function experssion
const square = function(x = 3) {
    return x * x;
};
// console.log(square());
// immidiately invokable function experssions - iifes
// (function() {
//     console.log('iffe ran..');
// })();
// (function(name) {
//     console.log(`hello ${name}`);
// })('charith');
// property methods
const todo = {
    add: function() {
        console.log('Add todo..');
    },
    edit: function(id) {
        console.log(`edit todo ${id}`);
    }
}
todo.delete = function() {
    console.log('Delete to do');
}
todo.add();
todo.edit(22);
todo.delete();