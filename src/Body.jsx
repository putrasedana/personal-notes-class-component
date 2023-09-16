import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import ArchiveList from "./ArchiveList";

const Body = ({ addNote, notes, onDelete, onArchive, onUnarchive }) => {
  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      <NoteList notes={activeNotes} onDelete={onDelete} onArchive={onArchive} />
      <h2>Arsip</h2>
      <ArchiveList onDelete={onDelete} archivedNotes={archivedNotes} onUnarchive={onUnarchive} />
    </div>
  );
};

export default Body;
