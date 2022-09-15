import { getValue } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";

function ChuckNorris() {

    const [value, setValue] = useState("facts here");

    useEffect(() => {getValue();}, []);

    const getValue = async () =>{
        const response = await fetch("https://api.chucknorris.io/jokes/random", {
            headers: {
                Accept: "application/json",
            },
        });

        const data = await response.json();
        setValue(data.value);
    };

    return (
        <div className="container">
          <h1>Chuck Norris Facts</h1>
          <p className="fact">{value}</p>
          <button type="button" className="btnC" onClick={getValue}>Get Another Fact</button>
        </div>
      );
};

export default ChuckNorris;