// event bubbling
// document.querySelector('.card-title').addEventListener('click', function() {
//     console.log('card title');
// });
// document.querySelector('.card-content').addEventListener('click', function() {
//     console.log('card content');
// });
// document.querySelector('.card').addEventListener('click', function() {
//     console.log('card ');
// });
// document.querySelector('.col').addEventListener('click', function() {
//     console.log('cal');
// });
// EVENT DELIGATION
// const deleteItem = document.querySelector('.delete-item');
// deleteItem.addEventListener('click', deleteItems)
document.body.addEventListener('click', deleteItems);
// function deleteItems(e) {
//     if (e.target.className === 'delete-item secondary-content') {
//         console.log('delete item');
//     }
// }
function deleteItems(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        console.log('delete item');
        e.target.parentElement.parentElement.remove();
    }
}