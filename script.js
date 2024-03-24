const list = document.querySelector("ul");
const form = document.querySelector("form");
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

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read)

    myLibrary.push(newBook);

    return myLibrary;
}

const makeLi = (title, author, pages, read) => {
    const li = document.createElement("li");

    li.innerHTML = `
        <div class="card">
            <p class="title">Title: ${title} </p>
            <p class="author">Author: ${author}</p>
            <p class="page">Page: ${pages}</p>
            <button class="btn ${read ? "btn-green" : "btn-red"}" onclick="toggleReadStatus(this)">${read ? "Read" : "Not Read"}</button>
        </div>`

    list.appendChild(li);
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formTitle = title.value;
    const formAuthor = author.value;
    const formPages = pages.value;
    const formRead = read.checked;

    makeLi(formTitle, formAuthor, formPages, formRead);
    addBookToLibrary(formTitle, formAuthor, formPages, formRead);

    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
});


for (let i = 0; i < myLibrary.length; i++) {
    makeLi(myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages, myLibrary[i].read);
}

const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".show-btn");
const closeButton = document.querySelector(".close-btn");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

const toggleReadStatus = (button) => {
    const toggleButtonClasss = button.classList;

    if (toggleButtonClasss.contains("btn-green")) {
        toggleButtonClasss.remove("btn-green");
        toggleButtonClasss.add("btn-red");

        button.textContent = "Not Read";
    } else {
        toggleButtonClasss.remove("btn-red");
        toggleButtonClasss.add("btn-green");

        button.textContent = "Read";
    }
};