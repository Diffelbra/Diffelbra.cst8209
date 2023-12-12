
class Book {
    constructor(title, author, genre) {
        this.title = title;
        this.author = author;
        this.genre = genre;
    }
}


let books = [];

function addBook(title, author, genre) {
    let book = new Book(title, author, genre);
    books.push(book);
    console.log(`Book titled '${title}' by ${author} has been added to the catalogue.`);
}

function showBooks() {
    books.forEach((book, index) => {
        console.log(`Index: ${index}, Title: ${book.title}`);
    });
}

function showBook(index) {
    if (index >= 0 && index < books.length) {
        let book = books[index];
        console.log(`Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}`);
    } else {
        console.log('Invalid index. No such book in the catalogue.');
    }
}