function Author(name, email) {
    this.name = name;
    this.email = email;
}

function Book(name, price, author, publishDate) {
    this.name = name;
    this.price = price;
    this.author = author;
    this.publishDate = publishDate;
}

var books = [];
var numberForm = document.getElementById("numberForm");
var booksForm = document.getElementById("booksForm");
var booksTableBody = document.getElementById("booksTableBody");

numberForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var booksNumber = Number(document.getElementById("booksNumber").value);
    var numberError = document.getElementById("numberError");

    if (booksNumber < 1 || !Number.isInteger(booksNumber)) {
        numberError.textContent =
            "Please enter a whole number greater than zero.";
        return;
    }

    numberError.textContent = "";
    createBookForms(booksNumber);
    document.getElementById("booksSection").classList.remove("hidden");
    document.getElementById("tableSection").classList.add("hidden");
    books = [];
});

function createBookForms(booksNumber) {
    booksForm.innerHTML = "";

    for (var index = 0; index < booksNumber; index++) {
        var bookForm = document.createElement("div");
        bookForm.className = "book-form";
        bookForm.innerHTML = `
            <h3>Book ${index + 1}</h3>
            <div class="form-row">
                <div class="field">
                    <label>Book's Name</label>
                    <input type="text" name="bookName" placeholder="Enter Book Name" />
                    <p class="error"></p>
                </div>
                <div class="field">
                    <label>Price</label>
                    <input type="number" name="price" min="0" step="any" placeholder="Enter Price" />
                    <p class="error"></p>
                </div>
                <div class="field">
                    <label>Author Name</label>
                    <input type="text" name="authorName" placeholder="Enter Author Name" />
                    <p class="error"></p>
                </div>
                <div class="field">
                    <label>Author E-mail</label>
                    <input type="email" name="authorEmail" placeholder="Enter Author E-mail" />
                    <p class="error"></p>
                </div>
                <div class="field">
                    <label>Publish Date</label>
                    <input type="date" name="publishDate" />
                    <p class="error"></p>
                </div>
            </div>
        `;
        booksForm.appendChild(bookForm);
    }

    var saveButton = document.createElement("button");
    saveButton.type = "submit";
    saveButton.textContent = "Add Books";
    booksForm.appendChild(saveButton);

    booksForm.onsubmit = function (event) {
        event.preventDefault();
        addBooksFromForm();
    };
}

function addBooksFromForm() {
    var bookForms = document.querySelectorAll(".book-form");
    var allFormsValid = true;
    var newBooks = [];

    bookForms.forEach(function (bookForm) {
        var nameInput = bookForm.querySelector('[name="bookName"]');
        var priceInput = bookForm.querySelector('[name="price"]');
        var authorNameInput = bookForm.querySelector('[name="authorName"]');
        var authorEmailInput = bookForm.querySelector('[name="authorEmail"]');
        var publishDateInput = bookForm.querySelector('[name="publishDate"]');

        var inputs = [
            nameInput,
            priceInput,
            authorNameInput,
            authorEmailInput,
            publishDateInput,
        ];
        var messages = [
            "Please provide a valid name.",
            "Please provide a valid price.",
            "Please provide a valid name.",
            "Please provide a valid email.",
            "Please provide a publish date.",
        ];

        inputs.forEach(function (input, index) {
            var error = input.nextElementSibling;
            var isEmpty = input.value.trim() === "";
            var isEmail = input.type === "email" && !input.validity.valid;

            if (isEmpty || isEmail) {
                input.classList.add("invalid");
                error.textContent = messages[index];
                allFormsValid = false;
            } else {
                input.classList.remove("invalid");
                error.textContent = "";
            }
        });

        if (!bookForm.querySelector(".invalid")) {
            var author = new Author(
                authorNameInput.value.trim(),
                authorEmailInput.value.trim(),
            );
            var book = new Book(
                nameInput.value.trim(),
                Number(priceInput.value),
                author,
                publishDateInput.value,
            );
            newBooks.push(book);
        }
    });

    if (allFormsValid) {
        books = newBooks;
        displayBooks();
        document.getElementById("booksSection").classList.add("hidden");
        document.getElementById("tableSection").classList.remove("hidden");
    }
}

function displayBooks() {
    booksTableBody.innerHTML = "";

    books.forEach(function (book, index) {
        var row = document.createElement("tr");
        row.innerHTML = `
            <td>${book.name}</td>
            <td>${book.publishDate}</td>
            <td>${book.price}</td>
            <td>${book.author.name}</td>
            <td>${book.author.email}</td>
            <td class="action-buttons">
                <button class="edit-button" data-index="${index}">Edit</button>
                <button class="delete-button" data-index="${index}">Delete</button>
            </td>
        `;
        booksTableBody.appendChild(row);
    });

    addTableButtonsEvents();
}

function addTableButtonsEvents() {
    var editButtons = document.querySelectorAll(".edit-button");
    var deleteButtons = document.querySelectorAll(".delete-button");

    editButtons.forEach(function (button) {
        button.onclick = function () {
            editBook(button.dataset.index);
        };
    });

    deleteButtons.forEach(function (button) {
        button.onclick = function () {
            books.splice(button.dataset.index, 1);
            displayBooks();
        };
    });
}

function editBook(bookIndex) {
    var book = books[bookIndex];
    var row = booksTableBody.rows[bookIndex];

    row.innerHTML = `
        <td><input value="${book.name}" data-field="name" /></td>
        <td><input type="date" value="${book.publishDate}" data-field="publishDate" /></td>
        <td><input type="number" min="0" step="any" value="${book.price}" data-field="price" /></td>
        <td><input value="${book.author.name}" data-field="authorName" /></td>
        <td><input type="email" value="${book.author.email}" data-field="authorEmail" /></td>
        <td class="action-buttons">
            <button class="save-button">Save</button>
            <button class="cancel-button">Cancel</button>
        </td>
    `;

    row.querySelector(".save-button").onclick = function () {
        var inputs = row.querySelectorAll("input");

        if (
            inputs[0].value.trim() === "" ||
            inputs[1].value === "" ||
            inputs[2].value === "" ||
            inputs[3].value.trim() === "" ||
            !inputs[4].validity.valid
        ) {
            alert("Please enter valid book information.");
            return;
        }

        book.name = inputs[0].value.trim();
        book.publishDate = inputs[1].value;
        book.price = Number(inputs[2].value);
        book.author.name = inputs[3].value.trim();
        book.author.email = inputs[4].value.trim();
        displayBooks();
    };

    row.querySelector(".cancel-button").onclick = function () {
        displayBooks();
    };
}
