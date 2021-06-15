import React, { useEffect } from "react";

function ListOwner(props) {
  // Call the props function
  const handleDeleteOwner = (id) => {
    const confirm = window.confirm(`Confirm delete owner id ${id}`);
    if (confirm) props.deleteOwner(id);
  };

  // Handle the array of owners and return JSX
  const RenderListOwners = () => {
    if (props.owners.length === 0) {
      return <div>No owners found</div>;
    }
    return props.owners.map((o) => {
      return (
        <div>
          <a
            onClick={() => {
              props.clickOwner(o.id);
            }}
            key={o.id}
          >
            {o.name}
          </a>
          (ID:{o.id})
          <button
            onClick={() => {
              handleDeleteOwner(o.id);
            }}
          >
            Delete
          </button>
        </div>
      );
    });
  };

  // Return JSX
  return (
    <>
      <h3>List of Owners</h3>
      <RenderListOwners />
    </>
  );
}

export default ListOwner;
