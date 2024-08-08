import React from "react";
import PropTypes from "prop-types";

export const Tile = ({ name, phone, email }) => {
  console.log("Tile props:", { name, phone, email }); // Debug output

  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      <p className="tile" aria-label="Phone">{phone}</p>
      <p className="tile" aria-label="Email">{email}</p>
    </div>
  );
};

Tile.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};