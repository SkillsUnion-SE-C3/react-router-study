import React, { useRef } from "react";

function AddOwner(props) {
  const nameInput = useRef(null);

  const handleAddOwner = () => {
    props.addOwner(nameInput.current.value);
  };

  return (
    <>
      <input type="text" placeholder="Name of Owner" ref={nameInput} />
      <button onClick={handleAddOwner}>Add</button>
    </>
  );
}

export default AddOwner;
