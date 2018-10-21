// document.getElementsByClassName
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);   
// document.getElementByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';
//convert HTML collection into array
// lis = Array.from(lis);
// lis.reverse();
// lis.forEach(function(li, index) {
//     console.log(li.className)
//     li.textContent = 'Hello';
//     li.textContent = `${index}: Hello`;
// });
// console.log(lis);
// document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');
console.log(items);
items.forEach(function(item, index) {
    item.textContent = `${index}: Hellos`;
    item.style.background = '#eee';
    item.style.padding = '20px';
})
const lidE = document.querySelectorAll(`li:nth-child(odd)`);
const lidO = document.querySelectorAll(`li:nth-child(odd)`);
lidE.forEach(function(item, index) {
    item.textContent = `${index}: Hellos`;
    item.style.background = '#ccc';
    item.style.padding = '20px';
})
for (let i = 0; i < lidO.length; i++) {
    lidO[i].style.background = 'gray';
}
console.log(items);