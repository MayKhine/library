/*
function Book(title) {
    // constructor for book
    this.title = title
}
Book.prototype.getTitle = function () { return this.title }


const instanceOfBook = new Book('harry pot pot 1')
console.log('old', instanceOfBook, instanceOfBook.getTitle(), instanceOfBook.__proto__)

*/

let myLibrary = [];

class Book {
    constructor(title, author, pages, read, notes) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
        this.notes = notes

    }
    getTitle() {
        return this.title
    }
}

const addBookToLibrary = (title, author, pages, read, notes) => {
    myLibrary.push(new Book(title, author, pages, read, notes))
}

const displayBooks = (library) => {
    for (let i = 0; i < library.length; i++) {
        console.log('Title: ', library[i].title)
        console.log('author: ', library[i].author)
    }
}

const addBookPopupButton = document.getElementById('addBookPopup')
const formPopUp = document.getElementById('form-popup')
const addBookSubmitButton = document.getElementById('addBookSubmit')
const form = document.getElementById('form')
const cancelAddingBookButton = document.getElementById('cancleAddingBook')
//form items
const title = document.getElementById('title')
const author = document.getElementById('author')
const pages = document.getElementById('pages')
const haveRead = document.getElementById('readCheck')
const notes = document.getElementById('notes')

addBookPopupButton.addEventListener('click', () => {
    // console.log('Button is clicked')
    formPopUp.style.display = 'block';
})

form.addEventListener('submit', (e) => {
    console.log('Form is submitted')
    addBookToLibrary(title.value, author.value, pages.value, haveRead.checked, notes.value)
    //clear the pop up if success
    formPopUp.style.display = 'none';
    e.preventDefault()
})

cancleAddingBook.addEventListener('click', () => {
    formPopUp.style.display = 'none';
})


console.log(myLibrary)