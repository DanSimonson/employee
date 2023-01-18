import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import employee from "./employee";
//import employees from "./employees.json";
import "./App.css";
//[data, ...employee]
function App() {
  const [item, setItem] = useState([]);
  //const [data, setData] = ([']);
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(true);
  //const team = employees.json;

  useEffect(() => {
    //console.log("employee: ", employee);
    let temp = [
      {
        id: 1,
        title: "project manager",
        firstName: "christopher",
        lastName: "peters",
      },
    ];
    if(employee){
      setItem(employee);
    }
    //let team = employee;
    //console.log("team.employees: ", team.employees);
    // console.log('team.employees[0]: ', team.employees[0]);
    // setItem([...item, {id: 1, title: 'developer', firstName: 'donald', lastName: 'smith'}])

    // for(let i = 0; i <= team.employees.length - 1; i++){
    //   // console.log('i', i)
    //   // console.log('team.employees[i]', team.employees[i])
    //   let temp = team.employees[i];
    //   console.log('temp', temp)
    //   setItem(...item[i], temp)
    // }
    //setItem([...item, temp])
  }, []);
  //console.log("item: ", item);

  function handleSubmit(e) {
    e.preventDefault();
    alert("form has been submitted");
    setIsSubmitted(true);
    console.log('item: ', item)
    console.log('firstName: ', firstName)
    let newItem = {id:'4',title: title, firstName: firstName, lastName: lastName}
    setItem([...item, newItem])
    // setFirstName(first);
    // setLastName(last);
    // setTitle(title)
    //remove text from inputs
    // setFirst("");
    // setLast("");
  }
  //<div></div>
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
              </div>))}
          </>
        )}
      </div>
    </>
  );
}

export default App;
/**
 * <div>
        {data.map((d) => (
          <ul>
            <li>{d.id}</li>
            <li>{d.title}</li>
          </ul>
        ))}
      </div>
 */
