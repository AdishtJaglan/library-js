const list = document.querySelector("ul");
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

for (let i = 0; i < myLibrary.length; i++) {
    const li = document.createElement("li");

    li.innerHTML = `
        <div class="card">
            <p class="title">Title: ${myLibrary[i].title} </p>
            <p class="author">Author: ${myLibrary[i].author}</p>
            <p class="page">Page: ${myLibrary[i].pages}</p>
            <p class="read">Book Read: ${myLibrary[i].read ? "yes" : "no"}</p>
        </div>`

    list.appendChild(li);
}

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

// console.log(addBookToLibrary("some title", "some author", 234, false));