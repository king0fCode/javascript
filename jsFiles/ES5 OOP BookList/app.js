// Book constructor 
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}
// UI constructor
function UI() {}
UI.prototype.addBookToList = function(book) {
    //console.log(book);
    const list = document.getElementById('book-list');
    // craete tr element
    const row = document.createElement('tr');
    // insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `;
    list.appendChild(row);
    //   console.log(row);
}
// clear fields function
UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}
// Show alert
UI.prototype.showAlert = function(message, className) {
    // create a div
    const div = document.createElement('div');
    // Add classname
    div.className = `alert ${className}`;
    //add text 
    div.appendChild(document.createTextNode(message));
    // get parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    // insert alert
    container.insertBefore(div, form);
    // time out after 3 sec
    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 3000);
}
// delete book
UI.prototype.deleteBook = function(target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}
// Event: add book
document.getElementById('book-form').addEventListener('submit', function(e) {
    // get form values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;
    //instantiate book
    const book = new Book(title, author, isbn);
    // initialise UI object
    const ui = new UI();
    // validate 
    if (title === '' || author === '' || isbn === '') {
        //   alert('failed');
        // error alert
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        // Add book to list
        ui.addBookToList(book);
        // show success 
        ui.showAlert('Book added!', 'success');
        // clear fields 
        ui.clearFields();
        // UI elements
        console.log(ui);
    }
    //  console.log(book);
    //  console.log(title, author, isbn);
    e.preventDefault();
});
// Event : delete
document.getElementById('book-list').addEventListener('click', function(e) {
    e.preventDefault();
    //  console.log(123);
    // initiate UI
    const ui = new UI();
    // delete book
    ui.deleteBook(e.target);
    // show alert message
    ui.showAlert('Book Removed!', 'success');
})