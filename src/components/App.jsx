import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [isNameSubmitted, setNameSubmitted] = useState(false);

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    setNameSubmitted(true);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {isNameSubmitted && name}</h1>
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="What's your name?"
          onChange={handleChange}
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
