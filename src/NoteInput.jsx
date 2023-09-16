import React from "react";

export default class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      charLimit: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const inputText = event.target.value;
    const charLimit = 50;

    if (inputText.length <= charLimit) {
      const remainingChars = charLimit - inputText.length;
      this.setState(() => {
        return {
          title: inputText,
          charLimit: remainingChars,
        };
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className="note-input note-input__body" onSubmit={this.onSubmitEventHandler}>
        <h2 className="note-input__title">Buat Catatan</h2>
        <p className="note-input__title__char-limit">Sisa karakter: {this.state.charLimit}</p>
        <input type="text" required placeholder="Ini adalah judul ..." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
        <textarea type="text" required placeholder="Tuliskan catatanmu di sini ..." value={this.state.body} onChange={this.onBodyChangeEventHandler} cols="30" rows="10"></textarea>
        <button type="submit">Buat</button>
      </form>
    );
  }
}
