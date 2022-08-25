import React, { useState } from "react";

function App() {
  const [fullname, setfullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: ""
  });
  // const [last, setlast] = useState("")
  // const [fullName, setFullName] = useState("");
  // const [lastName, setlastName] = useState("")

  const update = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);

    // const value = event.target.value;
    // const name = event.target.name;

    const{value, name} = event.target

    setfullName((prevalue) => {
      //console.log(prevalue);
      if(name === 'fname') {
        return{
          fname: value,
          lname: prevalue.lname,
          email: prevalue.email,
          phone: prevalue.phone 
        }
      }
      else if(name === 'lname') {
        return{
          fname: prevalue.fname,
          lname: value,
          email: prevalue.email,
          phone: prevalue.phone 
        }
      }
      else if(name === 'email') {
        return{
          fname: prevalue.fname,
          lname: prevalue.lname,
          email: value,
          phone: prevalue.phone 
        }
      }
      else if(name === 'phone') {
        return{
          fname: prevalue.fname,
          lname: prevalue.lname,
          email: prevalue.email,
          phone: value 
        }
      }
      
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert("form submitted");
    // setFullName(name);
    // setlastName(last)
  };
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <h1>
          Hello {fullname.fname} {fullname.lname}
          <img
            src="https://raw.githubusercontent.com/nixin72/nixin72/master/wave.gif"
            alt="Waving hand animated gif"
            height="45"
            width="45"
          />
        </h1>
        <p>{fullname.email}</p>
        <p>{fullname.phone}</p>
        <input
          type="text"
          value={fullname.fname}
          name="fname"
          placeholder="Enter Your Name"
          onChange={update}
        />
        <input
          type="text"
          value={fullname.lname}
          name="lname"
          placeholder="Enter Your Password"
          onChange={update}
        />
        <input
          type="email"
          value={fullname.email}
          name="email"
          placeholder="Enter Your Email"
          onChange={update}
        />
        <input
          type="number"
          value={fullname.phone}
          name="phone"
          placeholder="Enter Your Mobile Number"
          onChange={update}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
