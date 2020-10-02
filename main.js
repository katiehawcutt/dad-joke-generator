const getJokeButton = document.querySelector(".dad-button");
const jokeDisplay = document.querySelector("#joke");

async function getDadJokes() {
  let response = await fetch("https://icanhazdadjoke.com/", {
    headers: { accept: "application/json" },
  });
  let data = await response.json();
  displayJoke(data.joke);

  console.log(data.joke);
}

function displayJoke(joke) {
  jokeDisplay.innerText = `"${joke}"`;
}

getJokeButton.addEventListener("click", getDadJokes);

//BIG PLAN
//make a web page that displays dad jokes on the click of a button
//click on image for joke
//display the joke in a speech bubble
//3 boxes - brilliant, mediocre, terrible - rate each joke and assign it to a box
//add three buttons underneath the joke. use them to send joke to corresponding box

//First step
//decide on a rough layout for page and add our html elements

//Second step
//Make the page interactive using the DOM / link the JS
