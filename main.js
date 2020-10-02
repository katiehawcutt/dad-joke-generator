async function getDadJokes() {
  let response = await fetch("https://icanhazdadjoke.com/", {
    headers: { accept: "application/json" },
  });
  let data = await response.json();

  console.log(data.joke);
}

getDadJokes();

//BIG PLAN
//make a web page that displays dad jokes on the click of a button
//click on image for joke
//display the joke in a speech bubble
//3 boxes - brilliant, mediocre, terrible - rate each joke and assign it to a box

//First step
//decide on a rough layout for page and add our html elements

//Second step
//Make the page interactive using the DOM / link the JS
