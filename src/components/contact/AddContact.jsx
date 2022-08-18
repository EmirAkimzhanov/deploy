import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { contactContext } from "../../ContactContext";

const AddContact = () => {
  const { addContact } = useContext(contactContext);

  const [person, setPerson] = useState({
    name: "",
    number: "",
    photo: "",
  });

  const handleInput = (e) => {
    let obj = {
      ...person,
      [e.target.name]: e.target.value,
    };
    setPerson(obj);
  };
  
  return (
    <Box
      style={{ display: "flex", justifyContent: "center" }}
      sx={{ display: "flex", m: 3 }}
    >
      <TextField
        id="outlined-basic"
        label="name"
        variant="outlined"
        name="name"
        onChange={handleInput}
        value={person.name || ""}
      />
      <TextField
        id="outlined-basic"
        label="number"
        variant="outlined"
        name="number"
        onChange={handleInput}
        value={person.number || ""}
      />
      <TextField
        id="outlined-basic"
        label="photo"
        variant="outlined"
        name="photo"
        onChange={handleInput}
        value={person.photo || ""}
      />
      <Button
        variant="outlined"
        size="large"
        onClick={() => {
          addContact(person);
          setPerson({ name: "", number: "", photo: "" });
        }}
      >
        Add
      </Button>
    </Box>
  );
};

export default AddContact;
