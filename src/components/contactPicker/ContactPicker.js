import React from "react";
import PropTypes from 'prop-types';

export const ContactPicker = ({ contacts = [], onChange, value, name }) => {
  console.log("ContactPicker props:", { contacts, value, name }); // Debug output

  return (
    <select onChange={onChange} value={value} name={name} aria-label="Select a contact">
      <option value="">No Contact Selected</option>
      {contacts.map((contact) => (
        <option key={contact.name} value={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};

ContactPicker.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};