import React from "react";

const UnarchiveButton = ({ id, onUnarchive }) => {
  return (
    <button className="note-item__archive-button" onClick={() => onUnarchive(id)}>
      Pindahkan
    </button>
  );
};

export default UnarchiveButton;
