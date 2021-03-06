// replace element
// create element
const newHeading = document.createElement('h2');
//add id
newHeading.id = 'task-title';
//new text node 
newHeading.appendChild(document.createTextNode('Task Lists'));
//get the old heading
const oldHeading = document.getElementById('task-title');
// parent 
const cardAction = document.querySelector('.card-action');
// replace
cardAction.replaceChild(newHeading, oldHeading);
// console.log(newHeading);
// remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');
// remove list item
lis[0].remove();
// remove child element
list.removeChild(lis[3]);
// classes and attribute
const firstList = document.querySelector('li:first-child');
const link = firstList.children[0];
let val;
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;
// atributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('href');
link.setAttribute('title', 'Google');
val = link;
link.removeAttribute('title');
console.log(val);