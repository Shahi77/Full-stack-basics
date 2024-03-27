import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  return (
    <>
      <h1>Full stack </h1>
      <p>JOKES:{jokes.length}</p>
      {jokes.map((joke, index) => {
        <div key={joke.id}>
          <h3>{joke.first_name}</h3>
          <h3>{joke.last_name}</h3>
        </div>;
      })}
    </>
  );
}

export default App;
