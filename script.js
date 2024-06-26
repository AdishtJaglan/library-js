const list = document.querySelector("ul");
const form = document.querySelector("form");
const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".btn-add");
const closeButton = document.querySelector(".btn-close");
const myLibrary = [
    {
        title: "Can't Hurt Me",
        author: "David Goggins",
        pages: 312,
        read: true,
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        pages: 243,
        read: true,
    },
    {
        title: "Origin",
        author: "Dan Brown",
        pages: 458,
        read: false,
    },
];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    static addBookToLibrary(title, author, pages, read) {
        const newBook = new Book(title, author, pages, read);
        myLibrary.push(newBook);

        return myLibrary;
    }

    static makeLi(title, author, pages, read, index) {
        const li = document.createElement("li");
        li.innerHTML = `
        <div class="card">
            <p class="title">${title} </p>
            <p class="author"> ${author}</p>
            <p class="page"> ${pages}</p>
            <button class="btn ${read ? "btn-green" : "btn-red"}" onclick="Book.toggleReadStatus(this)">${read ? "Read" : "Not Read"}</button>
            <button class="btn btn-delete" onclick="Book.deleteBook(${index})">Delete</button>
        </div>`

        list.appendChild(li);
    }

    static deleteBook(index) {
        myLibrary.splice(index, 1);
        Book.render();
    }

    static render() {
        list.innerHTML = "";
        myLibrary.forEach((book, index) => {
            Book.makeLi(book.title, book.author, book.pages, book.read, index);
        });
    }

    static toggleReadStatus(button) {
        const toggleButtonClasss = button.classList;

        if (toggleButtonClasss.contains("btn-green")) {
            toggleButtonClasss.remove("btn-green");
            toggleButtonClasss.add("btn-red");

            button.read = false;
            button.textContent = "Not Read";
        } else {
            toggleButtonClasss.remove("btn-red");
            toggleButtonClasss.add("btn-green");

            button.read = true;
            button.textContent = "Read";
        }
    }
}

for (let i = 0; i < myLibrary.length; i++) {
    Book.makeLi(myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages, myLibrary[i].read, i);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formTitle = title.value;
    const formAuthor = author.value;
    const formPages = pages.value;
    const formRead = read.checked;

    Book.makeLi(formTitle, formAuthor, formPages, formRead);
    Book.addBookToLibrary(formTitle, formAuthor, formPages, formRead);

    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;

    dialog.close();
});

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});