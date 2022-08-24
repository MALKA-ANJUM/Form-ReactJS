import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState();

  const updateName = (event) => {
    setName(event.target.value);
  };

  const onSubmit = () => {
    setFullName(name);
  };
  return (
    <div className="App">
      <div className="content">
        <h1>
          Hello {fullName}{" "}
          <img
            src="https://raw.githubusercontent.com/nixin72/nixin72/master/wave.gif"
            alt="Waving hand animated gif"
            height="45"
            width="45"
          />
        </h1>
        <input
          type="text"
          value={name}
          placeholder="Enter You Name"
          onChange={updateName}
        />
        <button onClick={onSubmit} type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
