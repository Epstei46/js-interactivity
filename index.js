// console.log("Hello World")
// Note: created this entire document from scratch; all exercise coding was done here.

let form = document.querySelector("form")
form.addEventListener("submit", addMovie)
let message = document.querySelector("#message")


function addMovie(event) {
    event.preventDefault()
    let inputField = document.querySelector("input");

    const movie = document.createElement("li");
    const movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener("click", crossOffMovie)
    movie.appendChild(movieTitle);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", deleteMovie);
    movie.appendChild(deleteBtn);

    document.querySelector("ul").appendChild(movie);
    inputField.value = ''
}

function deleteMovie (event){
    event.target.parentNode.remove()
    /* each new button is a child of the parent movieTitle (list item), so that one list item gets removed */
    message.textContent = `${event.target.parentNode.textContent} deleted from the list!`

    revealMessage()
}

let crossOffMovie = (event) => {
    event.target.classList.toggle("checked")
    if (event.target.classList.contains("checked")){
        message.textContent = `${event.target.textContent} has been watched!`
    } else {
        message.textContent = `${event.target.textContent} added back to the list.`
    }

    revealMessage()
}

function revealMessage(){
    message.classList.remove("hide")
    setTimeout(() => {
        message.classList.add("hide")
    }, 2000);
}