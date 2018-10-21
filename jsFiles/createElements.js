// create element
const li = document.createElement('li');
// add class
li.className = 'collection-item';
// add id
li.id = 'new-item';
// add atribute 
li.setAttribute('title', 'New Item');
// create text node and append
li.appendChild(document.createTextNode('Hello Worlds'));
// create new link element
const link = document.createElement('a');
// add class
link.className = 'delete-item secondary-content';
// add icon html
link.innerHTML = '<li class="fa fa-remove"></li>';
// append link to li
li.appendChild(link);
// Apend li as child to ul
document.querySelector('ul.collection').appendChild(li);
console.log(li);