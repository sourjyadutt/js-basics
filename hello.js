//console.log("Hello World");
//const giveMeAJoke = require('give-me-a-joke');
//giveMeAJoke.getRandomDadJoke (function(joke) {
    //console.log(joke);
//});

const oneLinerJoke = require('one-liner-joke');

const getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke.body);