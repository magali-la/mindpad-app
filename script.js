// define global variables
let createPostForm = document.getElementById("createForm");
let createTitleInput = document.getElementById("createTitle");
let createContentInput = document.getElementById("createContent");

// form validity
createPostForm.addEventListener("submit", (event) => {
    if (!createPostForm.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    } 
    createPostForm.classList.add('was-validated');
}, false);