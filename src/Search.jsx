import React from "react";

const Search = ({ onSearchChange }) => {
  return (
    <div className="note-search">
      <input type="text" placeholder="Cari catatan ..." onChange={onSearchChange} />
    </div>
  );
};

export default Search;
