import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  useEffect(() => {
    const contactNames = new Set(contacts.map((contact) => contact.name));
    setDuplicate(contactNames.has(name));
  }, [name, contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      addContact({ name, phone, email });
      setName('');
      setPhone('');
      setEmail('');
    } else {
      alert("Contact already exists");
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={name} 
          setName={setName} 
          phone={phone} 
          setPhone={setPhone} 
          email={email} 
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};