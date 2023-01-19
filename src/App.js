import React, { useState, useEffect } from "react";
import employee from "./employee";
import employees from "./employees.json";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (employees) {
      setData(employees.employees);
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    let uniqueId = Math.random().toFixed(2).toString() * 1000;
    let newItem = {
      id: uniqueId,
      title: title,
      firstName: firstName,
      lastName: lastName,
    };
    setData([...data, newItem])
    setTitle("");
    setFirstName("");
    setLastName("");

 
  }
  const editMe = (e, id) => {
    e.preventDefault();
    console.log("e", e);
    console.log("id: ", id);
  };
  const deleteMe = (e) => {};
  return (
    <>
      <div className="mainSection">
        <h1 className="centerDiv">Simple Form</h1>
        <form onSubmit={handleSubmit} className="centerForm">
          <input
            value={title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            className="inputSection"
          />
          <input
            value={firstName}
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            className="inputSection"
          />
          <input
            value={lastName}
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            className="inputSection"
          />
          <input type="submit" className="inputSection" />
        </form>
        {data.length > 0 && (
          <>
            {data.map((d) => (
              <div className="displaySection" key={d.id}>
                <p>title: {d.title} </p>
                <p>firstName: {d.firstName} </p>
                <p>lastName: {d.lastName} </p>
                <button onClick={(e) => editMe(e, d.id)}>Edit</button>
                <button>Delete</button>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default App;
