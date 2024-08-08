import React from "react";
import PropTypes from 'prop-types';
import { Tile } from "../../components/tile/Tile";

export const TileList = ({ tiles = [] }) => {
  console.log("TileList props:", tiles); // Debug output

  if (!Array.isArray(tiles)) {
    console.error("Expected 'tiles' to be an array");
    return null;
  }

  return (
    <div>
      {tiles.map((tile, index) => (
        <Tile
          key={index}
          name={tile.name}
          phone={tile.contact}
          email={`Date: ${tile.date} | Time: ${tile.time}`}
        />
      ))}
    </div>
  );
};

TileList.propTypes = {
  tiles: PropTypes.array.isRequired,
};

TileList.defaultProps = {
  tiles: [],
};