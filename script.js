// define global variables
let createPostForm = document.getElementById("createForm");
let createTitleInput = document.getElementById("createTitle");
let createContentInput = document.getElementById("createContent");

// local storage
let padPosts = [];

window.addEventListener("load", () => {
    padPosts = JSON.parse(localStorage.getItem('posts')) || [];
    console.log("PadPosts retrieved from local storage", padPosts);
})

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
            savePost();
            // reset form and inputs
            createPostForm.reset();  
        }, 800);
    }
}, false);

// function to save posts and update local storage
function savePost() {
    // set an object with the content
    let newPost = {
        id: Date.now(),
        title: createTitleInput.value,
        content: createContentInput.value
    };
    console.log(newPost);

    // push it to the padPosts arr & store in local storage
    padPosts.push(newPost);
    console.log(padPosts);

    localStorage.setItem('posts', JSON.stringify(padPosts));
}