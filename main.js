const getJokeButton = document.querySelector(".dad-button");
const jokeDisplay = document.querySelector("#joke");
const thumbsUp = document.querySelector("#thumbs-up");
const thumbsDown = document.querySelector("#thumbs-down");
const hitList = document.querySelector("#hit-list");
const shitList = document.querySelector("#shit-list");
let joke;
let firstJoke = false;

async function getDadJokes() {
  let response = await fetch("https://icanhazdadjoke.com/", {
    headers: { accept: "application/json" },
  });
  let data = await response.json();
  joke = data.joke;
  firstJoke = true;
  displayJoke(data.joke);
}

function displayJoke(joke) {
  jokeDisplay.innerText = `"${joke}"`;
}

function addToHitList() {
  if (firstJoke === false) {
    return;
  }
  let check = checkJoke();
  if (check === false) {
    const listItem = document.createElement("li");
    listItem.innerText = joke;
    hitList.appendChild(listItem);
  }
}

function addToShitList() {
  if (firstJoke === false) {
    return;
  }
  let check = checkJoke();
  if (check === false) {
    const listItem = document.createElement("li");
    listItem.innerText = joke;
    shitList.appendChild(listItem);
  }
}

function checkJoke() {
  const listItems = document.querySelectorAll("li");
  const arrayList = Array.from(listItems);
  let result = arrayList.some((jokeItem) => {
    return jokeItem.innerText === joke;
  });
  return result;
}

getJokeButton.addEventListener("click", getDadJokes);
thumbsUp.addEventListener("click", addToHitList);
thumbsDown.addEventListener("click", addToShitList);

//BIG PLAN
//make a web page that displays dad jokes on the click of a button
//click on image for joke
//display the joke in a speech bubble
//2 boxes - brilliant, terrible - rate each joke and assign it to a box
//add two buttons underneath the joke. use them to send joke to corresponding box

//First step
//decide on a rough layout for page and add our html elements

//Second step
//Make the page interactive using the DOM / link the JS

//add event listeners to thumb buttons
//when thumbs up is clicked. add joke to hit list
//when thumbs down is clicked. add to shit list
//create new list item, assign to variable.
//set innerText of new list item to current joke.
//append list item to list.

// stop a joke being added to both lists.
//if a joke is already added to a list. we dont want to be able to duplicate it on the current list
// OR add it to the other list

// grab all list items using queryselectorall.
//use array.from to make listItem array

//compare current joke to jokeList
//if it is on the jokeList - dont do anything
// else add joke to list.
