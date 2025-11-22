// define global variables
let createPostForm = document.getElementById("createForm");
let createTitleInput = document.getElementById("createTitle");
let createContentInput = document.getElementById("createContent");
let padPostGrid = document.getElementById("padPostGrid");

// local storage
let padPosts = [];

window.addEventListener("load", () => {
    padPosts = JSON.parse(localStorage.getItem('posts')) || [];
    console.log("PadPosts retrieved from local storage", padPosts);

    // map through the pasPosts array if it isn't empty
    padPosts.map(post => displayPost(post));
});

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

// event listener for edit button
padPostGrid.addEventListener("click", (event) => {
    console.log("grid clicked somewhere");

    if (event.target.closest('.editButton')){
        console.log("edit button clicked");
        // find the closest post based on its custom data attribute
        let postContainer = event.target.closest('[data-post-id]');
        let postId = postContainer.dataset.postId;
        let editButton = postContainer.querySelector('.editButton');


        
    }
})


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

    // now clone the template and add it to the grid by appending the list
    let template = document.getElementById("templatePost");
    let clonedPost = template.cloneNode(true);

    // remove d-none class from clone to show it on the page
    clonedPost.classList.remove('d-none');

    // set a unique id for the post
    clonedPost.setAttribute('data-post-id', newPost.id);

    // define variables for the classes on the template
    let padPostDate = clonedPost.querySelector('.padPostDate');
    let padPostTitle = clonedPost.querySelector('.padPostTitle');
    let padPostContent = clonedPost.querySelector('.padPostContent');

    // change the date object to something more readable
    let postDate = new Date(newPost.id);
    // create a weekday Month and day
    let weekday = postDate.toLocaleDateString('en-US', {weekday: 'short'});
    let month = postDate.toLocaleDateString('en-US', {month: 'short', day: 'numeric'})
    let time = postDate.toLocaleTimeString('en-US', {hour:'numeric', minute: '2-digit', hour12: true});
    // format the date
    let formattedDate = `${weekday} ${month} @ ${time}`;
    console.log(formattedDate);
    padPostDate.innerText = formattedDate;

    // set the value of the title input and content input as the saved post info
    padPostTitle.value = newPost.title;
    padPostContent.value = newPost.content;

    // prepend the grid with the clonedtemplate to display it
    padPostGrid.prepend(clonedPost);
}

// function to display posts saved in local storage
function displayPost(postObj) {

    // now clone the template and add it to the grid by appending the list
    let template = document.getElementById("templatePost");
    let clonedPost = template.cloneNode(true);

    // remove d-none class from clone to show it on the page
    clonedPost.classList.remove('d-none');
    // set a unique id for the post
    clonedPost.setAttribute('data-post-id', postObj.id);

    // define variables for the classes on the template
    let padPostDate = clonedPost.querySelector('.padPostDate');
    let padPostTitle = clonedPost.querySelector('.padPostTitle');
    let padPostContent = clonedPost.querySelector('.padPostContent');

    // change the date object to something more readable
    let postDate = new Date(postObj.id);
    // create a weekday Month and day
    let weekday = postDate.toLocaleDateString('en-US', {weekday: 'short'});
    let month = postDate.toLocaleDateString('en-US', {month: 'short', day: 'numeric'})
    let time = postDate.toLocaleTimeString('en-US', {hour:'numeric', minute: '2-digit', hour12: true});
    // format the date
    let formattedDate = `${weekday} ${month} @ ${time}`;
    console.log(formattedDate);
    padPostDate.innerText = formattedDate;

    // set the value of the title input and content input as the saved post info
    padPostTitle.value = postObj.title;
    padPostContent.value = postObj.content;

    // prepend the grid with the clonedtemplate to display it
    padPostGrid.prepend(clonedPost);
}

// function to update posts
function updatePost(){

}