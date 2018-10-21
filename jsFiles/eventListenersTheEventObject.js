//  document.querySelector('.clear-tasks').addEventListener('click', function(e) {
//      console.log('hellow world');
//      //   e.preventDefault();
//  });
document.querySelector('.clear-tasks').addEventListener('click', onClicks);

function onClicks(e) {
    //  console.log('clicked');
    let val;
    val = e;
    // event target 
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;
    e.target.innerText = 'Hellow';
    // event type
    val = e.type;
    // timestamp
    val = e.timeStamp;
    //cords events relative to the window
    val = e.clientY;
    val = e.clientX;
    //cords event relative to the element
    val = e.offsetY;
    val = e.offsetX;
    console.log(val);
}