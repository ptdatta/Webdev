// This function open a modal window


// Alert in in-browser JavaScript - Does not return anything
alert("hello");

let name = prompt("What is your name?", "Guest");
console.log(name);

// Confirm in JS
let deletePost = confirm("Do you really want to delete this post?");
        
// console.log(deletePost);
if(deletePost){
    // Code to delete the post
    console.log("Your post has been deleted successfully");
}
else{
    // Code to cancel deletion of the post
    console.log("Your post has not been deleted");
}