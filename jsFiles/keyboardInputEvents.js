const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');
//clear input
// taskInput.value = '';
// form.addEventListener('submit', runEvent);
//keydown
// taskInput.addEventListener('keydown', runEvent);
// keyup
// taskInput.addEventListener('keyup', runEvent);
//focus 
// taskInput.addEventListener('focus', runEvent);
// blur
// taskInput.addEventListener('blur', runEvent);
//cut
// taskInput.addEventListener('cut', runEvent);
//paste
// taskInput.addEventListener('paste', runEvent);
// input
// taskInput.addEventListener('input', runEvent);
// change event
select.addEventListener('change', runEvent);

function runEvent(e) {
    console.log(`Event Type: ${e.type}`);
    console.log(e.target.value);
    //  heading.innerText = e.target.value;
    //  console.log(taskInput.value);
    // get input value
    //  e.preventDefault();
}