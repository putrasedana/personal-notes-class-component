import React from "react";
import Search from "./Search";

const Header = ({ onSearchChange }) => {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <Search onSearchChange={onSearchChange} />
    </div>
  );
};

export default Header;
