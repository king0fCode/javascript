const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');
//click
// clearBtn.addEventListener('click', runEvent);
// // event handler
// function runEvent(e) {
//     console.log(`Event type: ${e.type}`);
// }
// clearBtn.addEventListener('dblclick', runEvent);
// clearBtn.addEventListener('click', runEvent);
//mouse down, up , enter , leave, over, out, move
// clearBtn.addEventListener('mousedown', runEvent);
// clearBtn.addEventListener('mouseup', runEvent);
// card.addEventListener('mouseenter', runEvent);
// card.addEventListener('mouseeleave', runEvent);
// card.addEventListener('mouseover', runEvent);
// card.addEventListener('mouseout', runEvent);
card.addEventListener('mousemove', runEvent);

function runEvent(e) {
    console.log(`Event Type: ${e.type}`);
    heading.textContent = `mouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
}