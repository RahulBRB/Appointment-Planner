import React from "react";
import PropTypes from "prop-types";
import { Tile } from "../../components/tile/Tile";

export const TileList = ({ tiles = [] }) => {
  if (!Array.isArray(tiles)) {
    console.error("Expected 'tiles' to be an array");
    return null;
  }

  return (
    <div>
      {tiles.map((tile, index) => {
        const { name, ...rest } = tile; // Destructure name and get the rest of the properties
        return (
          <Tile
            key={index}
            name={name}
            description={rest}
          />
        );
      })}
    </div>
  );
};

TileList.propTypes = {
  tiles: PropTypes.array
};
