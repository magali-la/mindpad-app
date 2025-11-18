// define global variables
let createPostForm = document.getElementById("createForm");
let createTitleInput = document.getElementById("createTitle");
let createContentInput = document.getElementById("createContent");

// form validity
createPostForm.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!createPostForm.checkValidity()) {
        // display error message if invalid
        createPostForm.classList.add('was-validated');
        console.log("Invalid fields");
    } else { 
        // display valid feedback
        createTitleInput.classList.add('is-valid');
        createContentInput.classList.add('is-valid');
        createPostForm.classList.add('was-validated');
        console.log("All inputs valid");
        // set validation check on inputs 
        createTitleInput.classList.remove('is-valid');
        createContentInput.classList.remove('is-valid');
        // delay the reset to view the check
        setTimeout(() => {
            createPostForm.classList.remove('was-validated');
            createPostForm.reset();            
        }, 800);
    }
}, false);