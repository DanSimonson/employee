import React, { useState, useEffect } from "react";
import employee from "./employee";
import "./App.css";

function App() {
  const [item, setItem] = useState([]);
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(true);

  useEffect(() => { 
    if(employee){
      setItem(employee);
    } 
  }, []);


  function handleSubmit(e) {
    e.preventDefault();
    let uniqueId = Math.random().toFixed(2).toString() * 1000;
    // setIsSubmitted(true);
    console.log('item: ', item)
    console.log('firstName: ', firstName)
    let newItem = {id: uniqueId, title: title, firstName: firstName, lastName: lastName}
    setItem([...item, newItem])
    // setIsSubmitted(false)
  }
  const editMe = (id) => {
    //e.preventDefault();
    console.log('id: ', id)
  }
  const deleteMe = (e) => {

  }
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
        {item.length > 0 && (
          <>
            {item.map((d) => (
              <div className="displaySection" key={d.id}>
                <p>title: {d.title} </p>
                <p>firstName: {d.firstName} </p>
                <p>lastName: {d.lastName} </p>
                <button onClick={() => editMe(d.id)}>Edit</button>
                <button>Delete</button>
              </div>))}
          </>
        )}
      </div>
    </>
  );
}

export default App;

