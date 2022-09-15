import { useEffect, useState } from "react";

function DadsJokes() {

  const [joke, setJoke] = useState("jokes here");

  useEffect( () => {getJoke()}, [])

  const getJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        "Accept": "application/json",
      },
    });

    const data = await response.json();
    setJoke(data.joke);
  };

  return (
    <div className="container">
      <h1>Dad Jokes</h1>
      <p className="joke">{joke}</p>
      <button className="btnJ" type="button" onClick={getJoke}>Get another joke</button>
    </div>
  );
}

export default DadsJokes;
