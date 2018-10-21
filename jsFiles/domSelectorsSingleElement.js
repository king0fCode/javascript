// document.getElimentbyId()
// console.log(document.getElementById('task-title'));
// get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);
const taskTitle = document.getElementById('task-title');
// change styling 
// document.getElementById('task-title').style.background = '#eee';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '15px';
// document.getElementById('task-title').style.display = 'none';
// change content
// document.getElementById('task-title').textContent = 'Task lists';
// document.getElementById('task-title').innerText = 'My Tasks';
// document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>';
// taskTitle.style.background = '#eee';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '15px';
//taskTitle.style.display = 'none';
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';
/// document.query selector () 
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));
document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even').style.background = '#f4f4f4';