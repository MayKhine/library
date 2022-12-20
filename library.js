let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
        // this.notes = notes

    }
    getTitle() {
        return this.title
    }
}
const pageContainer = document.getElementsByClassName('container')
// console.log('Page COntainer', pageContainer)
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
// const notes = document.getElementById('notes')
const formNoteP = document.getElementById('form-note')
const errMsg = document.createElement('p')


const addBookToLibrary = (title, author, pages, read) => {
    //add the book to lib array
    myLibrary.push(new Book(title, author, pages, read))

    //create the book card 
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card")

    //create parts of book card
    const bookCardTitle = document.createElement('p')
    const bookCardAuthor = document.createElement('p')
    const bookCardPages = document.createElement('p')
    const bookCardReadCheck = document.createElement('button')
    // const bookCardNotes = document.createElement('p')
    const removeBookButton = document.createElement('button')
    removeBookButton.classList.add('remove-book-button')

    bookCardTitle.innerHTML = title
    bookCardAuthor.innerHTML = author
    bookCardPages.innerHTML = pages
    // bookCardReadCheck.innerHTML = read
    // bookCardNotes.innerHTML = notes

    if (read == true) {
        bookCardReadCheck.innerHTML = 'Read'
        bookCardReadCheck.style.backgroundColor = 'green'

    } else {
        bookCardReadCheck.innerHTML = 'not read'
        bookCardReadCheck.style.backgroundColor = 'red'
    }

    bookCardReadCheck.addEventListener('click', event => {
        //change the color 
        if (bookCardReadCheck.innerHTML == 'Read') {
            bookCardReadCheck.innerHTML = 'not read'
            bookCardReadCheck.style.backgroundColor = 'red'
        } else {
            bookCardReadCheck.innerHTML = 'Read'
            bookCardReadCheck.style.backgroundColor = 'green'
        }
    })

    removeBookButton.innerHTML = 'Remove'
    removeBookButton.value = myLibrary.length - 1
    removeBookButton.addEventListener('click', event => {
        //remove the book from array 
        for (let i = 0; i < myLibrary.length; i++) {
            if (removeBookButton.value == i) {
                myLibrary.splice(i, 1);
            }
        }
        bookCard.remove()
        console.log('updated lib: ', myLibrary)

        //reset all the button values
        const removeBookButtons = document.querySelectorAll(".remove-book-button")
        for (let i = 0; i < myLibrary.length; i++) {
            removeBookButtons[i].value = i
        }
    })

    bookCard.appendChild(bookCardTitle)
    bookCard.appendChild(bookCardAuthor)
    bookCard.appendChild(bookCardPages)
    bookCard.appendChild(bookCardReadCheck)
    // bookCard.appendChild(bookCardNotes)
    bookCard.appendChild(removeBookButton)

    const booksContainerDiv = document.getElementById('books-container')
    booksContainerDiv.appendChild(bookCard)
}

addBookPopupButton.addEventListener('click', () => {
    formPopUp.style.display = 'block';
})


document.addEventListener('mouseup', function (e) {
    if (!addBookPopupButton.contains(e.target) && !formPopUp.contains(e.target)) {
        formPopUp.style.display = 'none';
        errMsg.remove();
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let bookExistCheck = false;
    //check if book already exist
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title == title.value && myLibrary[i].author == author.value && myLibrary[i].pages == pages.value) {
            console.log('book already exist')
            // do not add the book 
            bookExistCheck = true;
        }
    }

    if (!bookExistCheck) {
        //add the book to array
        addBookToLibrary(title.value, author.value, pages.value, haveRead.checked)
        //clear the pop up if success
        formPopUp.style.display = 'none';
        errMsg.remove();
    }
    else {
        console.log('hereee')
        errMsg.innerHTML = 'This book already exists in this library.'
        errMsg.style.color = 'red'
        formNoteP.appendChild(errMsg)
    }
})

cancleAddingBook.addEventListener('click', () => {
    formPopUp.style.display = 'none';
    errMsg.remove();
})

console.log(myLibrary)