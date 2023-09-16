import React from "react";
import ArchiveItem from "./ArchiveItem";

const ArchiveList = ({ archivedNotes, onUnarchive, onDelete }) => {
  if (archivedNotes.length === 0) {
    return <p className="notes-list__empty-message">Tidak ada catatan</p>;
  }

  return (
    <div className="notes-list">
      {archivedNotes.map((note) => (
        <ArchiveItem key={note.id} {...note} onUnarchive={onUnarchive} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ArchiveList;
