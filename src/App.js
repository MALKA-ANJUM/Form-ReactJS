import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [last, setlast] = useState("")
  const [fullName, setFullName] = useState("");
  const [lastName, setlastName] = useState("")

  const updateName = (event) => {
    setName(event.target.value);
  };

  const updatePassword = (event) =>{
    setlast(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setFullName(name);
    setlastName(last)
  };
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
          <h1>
            Hello {fullName} {lastName}
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
            placeholder="Enter Your Name"
            onChange={updateName}
          />
          <input
            type="text"
            value={last}
            placeholder="Enter Your Password"
            onChange={updatePassword}
          />
          <button type="submit">
            Submit
          </button>
      </form>

    </div>
  );
}

export default App;
