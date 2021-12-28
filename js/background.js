<<<<<<< HEAD
// Showing a random background image.

=======
>>>>>>> 33baca3efcbf3082db08b7c14fd3898f8096fd8f
const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector("img");

bgImage.src = `img/${chosenImage}`;
<<<<<<< HEAD
=======

//document.body.appendChild(bgImage);
>>>>>>> 33baca3efcbf3082db08b7c14fd3898f8096fd8f
