<<<<<<< HEAD
// Random wise sayings.

// quote list
=======
>>>>>>> 33baca3efcbf3082db08b7c14fd3898f8096fd8f
const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "It is kind of fun to do the impossible.",
        author: "Walt Disney",
    },
    {
        quote: "There are better starters than me but I’m a strong finisher",
        author: "Usain Bolt",
    },
    {
        quote: "Tough times never last, but tough people do.",
        author: "Robert H. Schuller",
    },
    {
        quote: "I’ve failed over and over and over again in my life and that is why I succeed.",
        author: "Michael Jordan",
    },
    {
        quote: "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.",
        author: "Angelina Jolie",
    },
    {
        quote: "But I know, somehow, that only when it is dark enough can you see the stars.",
        author: "Martin Luther King",
    },
    {
        quote: "Grind Hard, Shine Hard.",
        author: "Dwayne Johnson",
    },
    {
        quote: "I didn’t get there by wishing for it or hoping for it, but by working for it.",
        author: "Estée Lauder",
    },
    {
        quote: "There is always some madness in love. But there is also always some reason in madness.",
        author: "Friedrich Nietzsche",
    },
<<<<<<< HEAD

=======
    
>>>>>>> 33baca3efcbf3082db08b7c14fd3898f8096fd8f
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;