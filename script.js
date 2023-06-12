let myLibrary = [];

//constructor
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        console.log(this.title + " by " + this.author)
    } 
}

function addBookToLibrary(title, author, pages, read){
    var newBook = Book(title, author, pages, read);
    myLibrary.push(newBook);
}

let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.close-btn');
let enterbook = document.querySelector('.enterbook');
let submit_button = document.querySelector('button');

enterbook.addEventListener("click", function(){
    modal.style.display = "block";
})

closeBtn.addEventListener("click", function(){
    modal.style.display = "none";
})

submit_button.addEventListener("click", function(){
    event.preventDefault();
})

/*
for (var i = 0; i<myLibrary.length; i++){
    var columnDiv = document.createElement('div');
    columnDiv.classList.add('col');
    const container = document.querySelector('.container');
    container.appendChild(columnDiv);
    console.log(i);
    for (var j = 0; j<16; j++){
        console.log(j);
        var rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        columnDiv.appendChild(rowDiv);
    }
}
*/