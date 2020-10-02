async function getDadJokes(){
    let response = await fetch("https://icanhazdadjoke.com/", {
        headers: { accept: "application/json" },
      })
      let data = await response.json();

      console.log(data.joke)
}

getDadJokes()