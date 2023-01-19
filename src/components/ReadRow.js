import React from "react";

const ReadRow = ({ teamMember, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{teamMember.fullName}</td>
      <td>{teamMember.address}</td>
      <td>{teamMember.phoneNumber}</td>
      <td>{teamMember.email}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, teamMember)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(teamMember.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadRow;