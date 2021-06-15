import React, { useState, useEffect } from "react";
import AddOwner from "./AddOwner";
import ListOwner from "./ListOwners";
import "./owner.css";
import PostmanAPI from "../../axios/PostmanAPI";

function OwnersContainer(props) {
  // Owner state
  const [owners, setOwners] = useState([]);

  // GET /owners
  useEffect(() => {
    listOwners();
  }, []);

  const listOwners = () => {
    PostmanAPI.get("/owner").then((res) => {
      setOwners(res.data);
    });
  };

  // Add owner function to be passed to child component via props
  const handleAddOwner = (name) => {
    PostmanAPI.post("/owner", { name }).then((res) => {
      listOwners();
    });
  };

  // Delete owner function to be passed to child component via props
  const handleDeleteOwner = (id) => {
    PostmanAPI.delete(`/owner/${id}`).then((res) => {
      listOwners();
    });
  };

  // Handle owner's name being clicked
  const handleOwnerClick = (ownerId) => {
    props.switchScreen("todo");
    props.setOwner(ownerId);
  };

  // Render JSX
  return (
    <>
      <ListOwner
        owners={owners}
        deleteOwner={handleDeleteOwner}
        clickOwner={handleOwnerClick}
      />
      <hr />
      <AddOwner addOwner={handleAddOwner} />
    </>
  );
}

export default OwnersContainer;
