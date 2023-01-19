import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import data from "./mock-data.json";
import "./App.css";

function App() {
  console.log('data: ', data)
  const [team, setTeam] = useState(data);
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  })
  const handleFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...formData };
    newFormData[fieldName] = fieldValue;
    setFormData(newFormData)
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newMember = {
      id: nanoid(),
      fullName: formData.fullName,
      address: formData.address,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
    };
    const newTeamMember = [...team, newMember];
    setTeam(newTeamMember);
  };
  return (
    <>
      <div className="app-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {team.map((teamMember) => (
              <tr>
                <td>{teamMember.fullName}</td>
                <td>{teamMember.address}</td>
                <td>{teamMember.phoneNumber}</td>
                <td>{teamMember.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Add A Contact</h2>

        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            required="required"
            placeholder="Enter a name..."
            name="fullName"
            onChange={handleFormChange}
          ></input>
          <input
            type="text"
            required="required"
            placeholder="Enter an address..."
            name="address"
            onChange={handleFormChange}
          ></input>
          <input
             type="text"
             required="required"
             placeholder="Enter a phone number..."
             name="phoneNumber"
             onChange={handleFormChange}
          ></input>
          <input
            type="email"
            required="required"
            placeholder="Enter an email..."
            name="email"
            onChange={handleFormChange}
          ></input>
          <button type='submit'>Add</button>
        </form>
      </div>
    </>
  );
}

export default App;

/**
 * <div className="mainSection">
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
        {employees.length > 0 && (
          <>
            {/* {employees.map((d) => (
              <div className="displaySection" key={d.id}>
                <p>title: {d.title} </p>
                <p>firstName: {d.firstName} </p>
                <p>lastName: {d.lastName} </p>
                <button onClick={(e) => editMe(e, d.id)}>Edit</button>
                <button>Delete</button>
              </div>
            ))} */
//</>
// )}
//</div>
