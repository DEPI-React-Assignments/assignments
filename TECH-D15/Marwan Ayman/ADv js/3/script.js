function Author(name, email) {
    this.name = name;
    this.email = email;
}


function Book(name, price, author) {
    this.name = name;
    this.price = price;
    this.author = author;
}


var books = [];

var bookNumber = document.getElementById("bookNumber");
var startButton = document.getElementById("startButton");
var bookForm = document.getElementById("bookForm");

var bookName = document.getElementById("bookName");
var bookPrice = document.getElementById("bookPrice");
var authorName = document.getElementById("authorName");
var authorEmail = document.getElementById("authorEmail");

var booksTable = document.getElementById("booksTable");

var currentBookNumber = 0;


startButton.addEventListener("click", function () {

    var number = Number(bookNumber.value);

    if (number <= 0) {
        alert("Please enter a valid number of books");
        return;
    }

    currentBookNumber = 0;

    bookForm.style.display = "block";

});


bookForm.addEventListener("submit", function (event) {

event.preventDefault();

if (
    bookName.value == "" ||
    bookPrice.value == "" ||
    authorName.value == "" ||
    authorEmail.value == ""
) {
    alert("Please fill all fields");
    return;
}


var author = new Author(
    authorName.value,
    authorEmail.value
);


var book = new Book(
    bookName.value,
    bookPrice.value,
    author
);


books.push(book);

currentBookNumber++;

bookForm.reset();


if (currentBookNumber == Number(bookNumber.value)) {

    bookForm.style.display = "none";

    displayBooks();

}

});


function displayBooks() {

    booksTable.innerHTML = "";


for (var i = 0; i < books.length; i++) {

    var row = document.createElement("tr");

    var bookNameCell = document.createElement("td");
    bookNameCell.textContent = books[i].name;

    var priceCell = document.createElement("td");
    priceCell.textContent = books[i].price;

    var authorNameCell = document.createElement("td");
    authorNameCell.textContent = books[i].author.name;

    var authorEmailCell = document.createElement("td");
    authorEmailCell.textContent = books[i].author.email;


    var actionsCell = document.createElement("td");


    var editButton = document.createElement("button");
    editButton.textContent = "Edit";


    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";


    editButton.addEventListener("click", function () {

        var row = this.parentElement.parentElement;

        var index = row.rowIndex - 1;

        editBook(index);

    });


    deleteButton.addEventListener("click", function () {

        var row = this.parentElement.parentElement;

        var index = row.rowIndex - 1;

        books.splice(index, 1);

        displayBooks();

    });


    actionsCell.appendChild(editButton);
    actionsCell.appendChild(deleteButton);


    row.appendChild(bookNameCell);
    row.appendChild(priceCell);
    row.appendChild(authorNameCell);
    row.appendChild(authorEmailCell);
    row.appendChild(actionsCell);


    booksTable.appendChild(row);
}
}


function editBook(index) {

    var book = books[index];


    var newBookName = prompt(
        "Enter Book Name",
        book.name
    );

    var newPrice = prompt(
        "Enter Book Price",
        book.price
    );

    var newAuthorName = prompt(
        "Enter Author Name",
        book.author.name
    );

    var newAuthorEmail = prompt(
        "Enter Author Email",
        book.author.email
    );


    if (
        newBookName == null || newBookName == "" ||
        newPrice == null || newPrice == "" ||
        newAuthorName == null || newAuthorName == "" ||
        newAuthorEmail == null || newAuthorEmail == ""
    ) {
        return;
    }


    book.name = newBookName;
    book.price = newPrice;
    book.author.name = newAuthorName;
    book.author.email = newAuthorEmail;


    displayBooks();
}