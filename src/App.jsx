import React from "react";
import { getInitialData } from "./utils";
import Header from "./Header";
import Body from "./Body";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchQuery: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange = (event) => {
    const searchQuery = event.target.value;
    this.setState({ searchQuery });
  };

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    this.setState((prevState) => {
      const updatedNotes = prevState.notes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            archived: true,
          };
        } else {
          return note;
        }
      });

      return {
        notes: updatedNotes,
      };
    });
  }

  onUnarchiveHandler(id) {
    this.setState((prevState) => {
      const updatedNotes = prevState.notes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            archived: false,
          };
        } else {
          return note;
        }
      });

      return {
        notes: updatedNotes,
      };
    });
  }

  onAddNoteHandler({ title, body }) {
    const currentDateTime = new Date();
    const formattedDateTime = currentDateTime.toISOString();

    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +currentDateTime,
            title,
            body,
            createdAt: formattedDateTime,
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    const filteredNotes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()));

    return (
      <div>
        <Header onSearchChange={this.handleSearchChange} />
        <Body addNote={this.onAddNoteHandler} notes={filteredNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} onUnarchive={this.onUnarchiveHandler} />
      </div>
    );
  }
}
