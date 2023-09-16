import React from "react";
import DeleteButton from "./DeleteButton";
import UnarchiveButton from "./UnarchiveButton";
import { showFormattedDate } from "./utils";

const ArchiveItem = ({ id, title, body, createdAt, onDelete, onUnarchive }) => {
  const formattedDate = showFormattedDate(createdAt);

  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{formattedDate}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <UnarchiveButton id={id} onUnarchive={onUnarchive} />
      </div>
    </div>
  );
};

export default ArchiveItem;
