//This script displays a random image from the array when the page is loaded. I followed this tutorial https://www.peachpit.com/articles/article.aspx?p=2239154&seqNum=10 
//Setting the function to run when page loads

window.onload = displayImage;

// Array of various photos from the Gallery.
let random_images_array = [
    'images/foxglove.jpg',
    'images/Facebook cover, backyard photos.jpg',
    'images/Mimosas.jpg',
    'images/peonies-bloom.jpg',
    'images/peony-coral.jpg',
    'images/phlox-creeping.jpg',
    'images/pink-dangly.jpg'
];

// Function to display a random image from the array using Math functions and array.length calculation

function displayImage () {
    let randomNumber = Math.floor(Math.random() * random_images_array.length);
    document.getElementById("headerImage").src = random_images_array[randomNumber];
}

