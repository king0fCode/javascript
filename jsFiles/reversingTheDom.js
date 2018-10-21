let val;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');
val = listItem;
val = list;
// Get child nodes
val = list.childNodes;
// Get children element node
val = list.children;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype
val = list.childNodes[1].nodeType;
val = list.children;
val = list.children[0];
list.children[1].textContent = 'Hellow';
// children of children
val = list.children[3].children[0];
list.children[3].children[0].id = 'test-link';
// First Child
val = list.firstChild;
val = list.firstElementChild;
// Last Child
val = list.lastChild;
val = list.lastElementChild;
// Count Child Elements
val = list.childElementCount;
// Get parent Node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;
// Get next sibling 
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
// Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);