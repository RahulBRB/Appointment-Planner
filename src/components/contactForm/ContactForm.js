import React from "react";
import PropTypes from 'prop-types';

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        aria-label="Name"
        required
      />
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
        aria-label="Phone"
        pattern="[0-9]{10}"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        aria-label="Email"
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  phone: PropTypes.string.isRequired,
  setPhone: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};