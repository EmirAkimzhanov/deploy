import React, { useContext, useEffect } from "react";
import { contactContext } from "../../ContactContext";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const { contacts, getContact } = useContext(contactContext);

  useEffect(() => {
    getContact();
  }, []);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {contacts.map((item, index) => (
        <ContactCard key={index} item={item} />
      ))}
    </div>
  );
};

export default ContactList;
