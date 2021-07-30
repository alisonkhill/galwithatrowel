// This is an alternate way to use an array to display a random image in the header of the page. This is not currently being used in the Gal with a Trowel project, but I saved it just in case

// Array of various photos from the Gallery.

let random_images_array = [
    'foxglove.jpg',
    'Facebook cover, backyard photos.jpg',
    'Mimosas.jpg',
    'peonies-bloom.jpg',
    'peony-coral.jpg',
    'phlox-creeping.jpg',
    'pink-dangly.jpg'
];

// Function to display a random image from the array. I followed a tutorial found here: http://www.dyn-web.com/code/random-image-js/

function getRandomImage(imgAr, path) {
    path = 'images/';
    let num = Math.floor(Math.random() * imgAr.length);
    let img = imgAr[num];
    let imgStr = '<img src ="' + path + img + '"alt = "">';
    document.write(imgStr); document.close();
}

// Calling the function
getRandomImage(random_images_array);